import requests
import json
import math
import copy
import pickle
import os
import hashlib
import datetime
from reptile_house import steveIrwin


class reptileCentral(object):
    """
    Welcome to the reptile house, please don't lick the walls.
    Author: Aask

    """
    combat_targets_list = None
    @staticmethod
    def __init__(user_name=None, account_id=None, token=None, newbie=None, no_token=False):
        # When initialized with no args, pull config from player_config
        # When initialized with args, set config appropriately
        
        reptileCentral.no_token = no_token

        if (user_name is None or account_id is None or token is None or newbie is None) and not no_token:
            from reptile_house import player_config

            reptileCentral.user_name = player_config.user_name
            reptileCentral.newbie = player_config.newbie
            reptileCentral.accountId = player_config.accountId
            reptileCentral.token = player_config.token
        elif not no_token:
            reptileCentral.user_name = user_name
            reptileCentral.newbie = newbie
            reptileCentral.accountId = account_id
            reptileCentral.token = token
        elif no_token:
            reptileCentral.user_name = user_name
            reptileCentral.newbie = newbie

        reptileCentral.setup_game()
        
    @staticmethod
    def setup_game():
        reptileCentral.scout = steveIrwin.steveIrwin()
        reptileCentral.url_prefix = 'https://api2.zoogame.finance/api/pvp'
        if(reptileCentral.newbie):
            reptileCentral.url_prefix = f'{reptileCentral.url_prefix}Newbie'

        reptileCentral.upgrade_table = reptileCentral.scout.upgrade_table

        reptileCentral.all_players_url = f"{reptileCentral.url_prefix}/realRanking?currentPage=1&perPage=5000"
        
        reptileCentral.battle_predictions = {}
        reptileCentral.battle_defense_predictions = {}
        reptileCentral.battle_hashes = {}
        reptileCentral.rankings_csv = 'logs/rankings.csv'


        reptileCentral.fetch_battle_hashes()

        reptileCentral.get_all_targets_by_user()

        if not reptileCentral.no_token:
            # Here we will need to fight 
            reptileCentral.combat_targets_url = f"{reptileCentral.url_prefix}/combatList?player={reptileCentral.accountId}&token={reptileCentral.token}"
            reptileCentral.player_combat_nfts_url = f"{reptileCentral.url_prefix}/getMyCombatNfts?owner={reptileCentral.accountId}&token={reptileCentral.token}"
            reptileCentral.player_rank_url = f"{reptileCentral.url_prefix}/getMyCombatNfts?owner={reptileCentral.accountId}&token={reptileCentral.token}"
            reptileCentral.fetch_player_combat_nfts()
            reptileCentral.fetch_player_rank()
            reptileCentral.calc_hit_range()
        else:
            # Here we're just making our battle table
            # reptileCentral.fetch_battle_defense_predictions()
            
            reptileCentral.get_all_being_targeted_by_user()

    @staticmethod
    def fetch_combat_targets_list():
        # Let's dump the list out on one round, then just not make the rest call on the next loop
        reptileCentral.combat_targets_list = reptileCentral.scout.fetch_json_from_url(
            reptileCentral.combat_targets_url)['data']
        

    @staticmethod
    def fetch_player_combat_nfts():
        reptileCentral.player_combat_nfts = reptileCentral.scout.fetch_json_from_url(
            reptileCentral.player_combat_nfts_url)['data']

    @staticmethod
    def fetch_player_rank():
        # If we're not in our combat list, set our ranking to the bottom of the list
        if(not any(x for x in reptileCentral.combat_targets_list if x['nickname'] == reptileCentral.user_name)):
            temp = reptileCentral.combat_targets_list[-1]
            reptileCentral.player_ranking = temp['ranking'] + 1
        else:
            # fetch our index
            for target in reptileCentral.combat_targets_list:
                if(target['nickname'] == reptileCentral.user_name):
                    reptileCentral.player_ranking = target['ranking']

    @staticmethod
    def calc_hit_range():
        t = reptileCentral.player_ranking
        e = {'higher': 0, 'lower': 0}
        if t >= 1 and t <= 23:
            e['higher'] = (1, t - 9)[t - 9 > 1]
            e['lower'] = t + 9
        elif t >= 24 and t <= 201:
            e['higher'] = t - (t - 5 + .5 + math.pow(-1, t - 5 - 1) / 2) / 2
            e['lower'] = t + (t - 5 + .5 + math.pow(-1, t - 5 - 1) / 2) / 2
        else:
            e['higher'] = t - 100 + 1
            e['lower'] = t + 100 - 1

        reptileCentral.hit_range = e

    @staticmethod
    def is_team_alive(team_roster):
        isAlive = True
        count_dead = 0
        for player in team_roster:
            if(player['live'] < 1):
                count_dead += 1
        if count_dead == 3:
            isAlive = False
        return isAlive

    @staticmethod
    def combat_team(attackers, defenders):
        defender = 0
        for defense in defenders:
            if defense['live'] <= 0:
                defender += 1

        for attacker in attackers:
            if attacker['live'] <= 0:
                continue

            # select defender
            attacker_hit = reptileCentral.scout.predict_hit(
                attacker, defenders[defender])
            if attacker_hit > 0:
                defenders[defender]['live'] -= attacker_hit
            
                if defenders[defender]['live'] < 1:
                    defender += 1

                if not reptileCentral.is_team_alive(defenders):
                    break
                if defender > 2:
                    break

        return defenders

    @staticmethod
    def fetch_team_stats(team):

        team_stats = []

        for player in team:
            key = f"{player['teamId']},{player['rarity']},{player['computingPower']},{player['level']}"
            reptileCentral.scout.get_stats(
                player['teamId'], player['rarity'], player['computingPower'], player['level'])
            team_stats += copy.deepcopy(
                [reptileCentral.scout.nftStatsTable[f'{key}']])

        return team_stats

    @staticmethod
    def predict_outcome(attackers, defenders):

        if len(attackers) != 3:
            # print("Invalid number of attackers")
            return False
        if len(defenders) != 3:
            # print("Invalid number of defenders")
            return False

        attacker_stats = reptileCentral.fetch_team_stats(attackers)
        defender_stats = reptileCentral.fetch_team_stats(defenders)
        
        attackers_raw = json.dumps(attacker_stats, sort_keys=True)
        defenders_raw = json.dumps(defender_stats, sort_keys=True)
        battle_hash = hashlib.sha256(f'{attackers_raw}{defenders_raw}'.encode()).hexdigest()
        
        # Add our battle_hash
        if battle_hash not in reptileCentral.battle_hashes:
            # We need to actually combat

            output = True
            run = True

            num_rounds = 0
            while(run):
                if reptileCentral.is_team_alive(attacker_stats) and reptileCentral.is_team_alive(defender_stats):
                    # Fight!
                    num_rounds += 1
                    # first attackers on defenders
                    defender_stats = reptileCentral.combat_team(
                        attacker_stats, defender_stats)
                    if reptileCentral.is_team_alive(defender_stats) and num_rounds <= 20:
                        attacker_stats = reptileCentral.combat_team(
                            defender_stats, attacker_stats)
                    else:
                        if not reptileCentral.is_team_alive(attacker_stats):
                            output = False
                        run = False
                    
                    if not reptileCentral.is_team_alive(attacker_stats):
                        output = False
                        run = False
                else:
                    if not reptileCentral.is_team_alive(attacker_stats):
                        output = False
                    
                    run = False

            reptileCentral.battle_hashes[f'{battle_hash}'] = output
            reptileCentral.store_battle_hashes()

        else:
            # We're previously computed this, just fetch the outcome
            output = reptileCentral.battle_hashes[f'{battle_hash}']
        
        return output

    @staticmethod
    def initiate_combat(defender_id):

        url = f"{reptileCentral.url_prefix}/combat?player1={reptileCentral.accountId}&player2={defender_id}&token={reptileCentral.token}"

        payload = {}
        headers = {
            'Host': 'api2.zoogame.finance',
            'Accept': 'application/json, text/plain, */*',
            'Authorization': f'Bearer {reptileCentral.token}',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
            'Sec-Gpc': '1',
            'Origin': 'https://www.zoogame.app',
            'Sec-Fetch_Site': 'cross-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://www.zoogame.app/',
            'Accept-Encoding': 'gzip,deflate',
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'close'
        }

        response = requests.request("GET", url, headers=headers, data=payload)

        return response.text

    @staticmethod
    def get_all_targets_by_user():
        # This function will get our next target
        all_players = None
        reptileCentral.fetch_combat_targets_list()
        if not hasattr(reptileCentral, 'combat_targets_list'):
            all_players = requests.get(reptileCentral.all_players_url)
        else:
            all_players = reptileCentral.combat_targets_list

        all_players_json = json.loads(all_players.text)['data']
        
        static_player = None
        for player in all_players_json:
            if player['nickname'] == reptileCentral.user_name:
                static_player = player
                break
        
        if static_player is None:
            print('Errors finding player in the rankings...are you sure you have logged in today?')
            return False

        count = len(all_players_json) - 1
        index = 1
        win = 0
        loss = 0
        outcome = True
        # print("\033c")
        for target in all_players_json:
            potential_target = target['owner']
            if f'{potential_target}' not in reptileCentral.battle_predictions:
                if target['nickname'] == reptileCentral.user_name:
                    # No need to fight ourselves
                    continue
                defenders = copy.copy(target['defenseCards'])
                attackers = copy.copy(static_player['attackCards'])

                if target['defenseCardsCount'] == 3:
                    outcome = reptileCentral.predict_outcome(attackers, defenders)
                    reptileCentral.battle_predictions[f'{potential_target}'] = outcome
                else:
                    continue
            
            if reptileCentral.battle_predictions[f'{potential_target}'] == True:
                win += 1
            else:
                loss += 1
            
            print(f'\033[K\033[A\033[A{index} of {count} targets calculated.\n{reptileCentral.user_name}\'s win/loss attacking on this board: {win} wins {loss} losses',end='\r')

            index += 1
        
        reptileCentral.write_file(reptileCentral.rankings_csv,f'{reptileCentral.user_name},attacking,{win},{loss}')

        # print(f'\n{reptileCentral.user_name}\'s win/loss ratio if attacking on this board is {win} wins to {loss} losses')

    @staticmethod
    def get_all_being_targeted_by_user():
        # This function will get our next target
        # all_players = requests.get(reptileCentral.all_players_url)
        all_players = None
        reptileCentral.fetch_combat_targets_list()
        if not hasattr(reptileCentral, 'combat_targets_list'):
            all_players = requests.get(reptileCentral.all_players_url)
        else:
            all_players = reptileCentral.combat_targets_list
            
        all_players_json = json.loads(all_players.text)['data']
        static_player = None
        for player in all_players_json:
            if player['nickname'] == reptileCentral.user_name:
                static_player = player
                break
        count = len(all_players_json) - 1
        index = 1
        win = 0
        loss = 0
        #print("\033c")
        for target in all_players_json:
            potential_target = target['owner']

            if f'{potential_target}' not in reptileCentral.battle_defense_predictions:
                if target['nickname'] == reptileCentral.user_name:
                    continue
                attackers = copy.copy(target['attackCards'])
                try:
                    defenders = copy.copy(static_player['defenseCards'])
                except:
                    continue
                if len(defenders) == 3:
                    # We should only build this list once...
                    outcome = reptileCentral.predict_outcome(attackers, defenders)
                    reptileCentral.battle_defense_predictions[f'{potential_target}'] = outcome

            if reptileCentral.battle_defense_predictions[f'{potential_target}'] == False:
                win += 1
            else:
                loss += 1
            
            print(f'\033[K\033[A\033[A{index} of {count} targets calculated. \n{reptileCentral.user_name}\'s win/loss defending on this board: {win} wins {loss} losses',end='\r')
            index += 1
        reptileCentral.store_combat_targets_list()
        reptileCentral.write_file(reptileCentral.rankings_csv,f'{reptileCentral.user_name},defending,{win},{loss}')

        #print(f'\n{reptileCentral.user_name}\'s win/loss ratio if defending on this board is {win} wins to {loss} losses')


    @staticmethod
    def enter_combat():
        combat_targets = []
        for target in reptileCentral.combat_targets_list:
            if reptileCentral.hit_range['higher'] < target['ranking'] < reptileCentral.hit_range['lower']:
                combat_targets += [target['owner']]
        # calc win/loss
        win = 0
        loss = 0
        for key in reptileCentral.battle_predictions:
            if reptileCentral.battle_predictions[key] == True:
                win += 1
            else:
                loss += 1

        print(
            f'Our win/loss ratio on this board is {win} wins to {loss} losses...')
        for key in reptileCentral.battle_predictions:
            if key in combat_targets:
                if reptileCentral.battle_predictions[key] == True:
                    print(f'\nwe are going to try to fight {key}!')
                    response = reptileCentral.initiate_combat(key)
                    if 'tickets error' in response:
                        print("You're out of tickets, fool!")
                        break
                    elif 'expired' in response:
                        print('they left combat range, let\'s try another one...')
                    elif 'changeScore' in response:
                        battle_results = json.loads(response)
                        score_change = battle_results['data']['changeScore']
                        if score_change > 0:
                            print('We won! Would you look at that! HA!')
                            break
                        elif score_change < 0:
                            print('We lost? Adjust your thresholds for battle it seems...maybe recalc your stats tables?')
                    else:
                        print("Other message received, debug me please!")
                        print(f'{response}')
                        break

   
    @staticmethod
    def store_battle_hashes():
        # open a pickle file
        filename = f'logs/battle_hashes.pk'

        with open(filename, 'wb') as fi:
            # dump your data into the file
            pickle.dump(reptileCentral.battle_hashes, fi)
    
    @staticmethod
    def store_combat_targets_list():
        # open a pickle file
        filename = f'logs/combat_targets_list.pk'

        with open(filename, 'wb') as fi:
            # dump your data into the file
            pickle.dump(reptileCentral.combat_targets_list, fi)
        
    
    @staticmethod
    def fetch_battle_hashes():
        try:
            filename = f'logs/battle_hashes.pk'
            with open(filename, 'rb') as fi:
                reptileCentral.battle_hashes = pickle.load(fi)
        except:
            try:
                print("No previously stored battle hashes...")
                os.mkdir('logs')
            except:
                print("Found log folder...")
    # @staticmethod
    # def fetch_combat_targets_list():
    #     try:
    #         filename = f'logs/combat_targets_list.pk'
    #         with open(filename, 'rb') as fi:
    #             reptileCentral.combat_targets_list = pickle.load(fi)
    #     except:
    #         try:
    #             print("No previously stored combat_targets_list...")
    #             os.mkdir('logs')
    #         except:
    #             print("Found log folder...")
    
    @staticmethod
    def does_attacker_have_more_rounds(attacker_stats, defender_stats):

        defenseLife = reptileCentral.sum_child_values('live', defender_stats)
        defenseAttack = reptileCentral.sum_child_values(
            'attack', defender_stats)
        defenseDefense = reptileCentral.sum_child_values(
            'defense', defender_stats)
        defenseCombatPower = reptileCentral.sum_child_values(
            'power', defender_stats)

        attackLife = reptileCentral.sum_child_values('live', attacker_stats)
        attackAttack = reptileCentral.sum_child_values(
            'attack', attacker_stats)
        attackDefense = reptileCentral.sum_child_values(
            'defense', attacker_stats)
        attackCombatPower = reptileCentral.sum_child_values(
            'power', attacker_stats)

        attackNumRounds = attackLife / (defenseAttack - attackDefense)
        defenseNumRounds = defenseLife / (attackAttack - defenseDefense)
        # Change this number to adjust tolerance of how bad you want to make sure things are beaten. This does NOT recalculate the output table, delete your pickle files to recalc after changing this
        if (attackNumRounds - defenseNumRounds) > 1 and defenseNumRounds > 0:
            return True
        else:
            return False

    @staticmethod
    def sum_child_values(key, parent_obj):
        sum = 0
        for obj in parent_obj:
            sum += obj[f'{key}']
        return sum

    @staticmethod
    def write_file(filename,content):
        with open(filename, 'a', encoding='utf-8') as file:
            file.write(f'{datetime.datetime.now().timestamp()},{content}')
            file.write('\n')
