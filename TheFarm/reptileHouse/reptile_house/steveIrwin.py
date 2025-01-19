import os
import requests
import json
import pickle
import js2py
import math
import shutil
import hashlib
from reptile_house.reptileCentral import reptileCentral


class steveIrwin(object):
    @staticmethod
    def __init__():
        steveIrwin.load_stats_table()
        steveIrwin.nftStatsTable = {}
        steveIrwin.fetch_stat_calculations()
        steveIrwin.hit_hashes = {}
        steveIrwin.fetch_hit_hashes()


    @staticmethod
    def load_stats_table():
        try:
            with open('reptile_house/upgradeTable.json', encoding="utf8") as f:
                steveIrwin.upgrade_table = json.load(f)
        except:
            print('Unable to load stats table under reptile_house/upgradeTable.json!!!')
            exit()

    @staticmethod
    def fetch_json_from_url(url):
        output = requests.get(url)
        return json.loads(output.text)

    @staticmethod
    def get_stats(team_id, rarity, computing_power, level):
        if f"{team_id},{rarity},{computing_power},{level}" not in steveIrwin.nftStatsTable:
            #   # Calculate the stats for an NFT
            for item in steveIrwin.upgrade_table:
                if item['teamId'] == int(team_id):
                    if item['rarity'] == int(rarity):
                        card_stats = item
                        break

            try:
                stats = {
                    "attack": card_stats['attack'],
                    "live": card_stats['live'],
                    "defense": card_stats['defense'],
                    "fatal": card_stats['fatal'],
                    "recover": card_stats['recover'],
                    "gift": card_stats['gift'],
                    "computingPower": computing_power,
                    "level": level
                }
            except:
                stats = {
                    "attack": 1,
                    "live": 1,
                    "defense": 1,
                    "fatal": 1,
                    "recover": 1,
                    "gift": 1,
                    "computingPower": computing_power,
                    "level": level
                }
                card_stats = copy.deepcopy(stats)
                #print("errors fetching stats...using default of 0")

            if(rarity >= 4):
                if(level > 1):
                    # loop through all upgrades to find our correct upgrade table
                    if 'upgradeTable' in card_stats:
                      for upgrade in card_stats['upgradeTable']:
                          if(upgrade['level'] == level):
                              upgrade_mods = upgrade
                              break

                      stats['attack'] += upgrade_mods['attack']
                      stats['live'] += upgrade_mods['live']
                      stats['defense'] += upgrade_mods['defense']
                      stats['fatal'] += upgrade_mods['fatal']
                      stats['recover'] += upgrade_mods['recover']

            # Mod the base stats
            stats['attack'] = 1.1 * stats['attack']
            stats['live'] += stats['computingPower'] / 5
            stats['attack'] += stats['computingPower'] / 25
            stats['defense'] += stats['computingPower'] / 25
            stats['fatal'] += 1e-4 * stats['computingPower']
            stats['recover'] += 1e-4 * stats['computingPower']
            stats['power'] = 1 * stats['live'] + 10 * stats['attack'] + 10 * \
                stats['defense'] + 10 * stats['fatal'] + 1e3 * stats['recover']
            stats['power'] = stats['power']
            stats['attack'] = stats['attack']
            stats['live'] = stats['live']
            stats['defense'] = stats['defense']
            stats['fatal'] = stats['fatal']
            stats['recover'] = stats['recover']

            steveIrwin.nftStatsTable[f"{team_id},{rarity},{computing_power},{level}"] = stats

            steveIrwin.store_stat_calculations()

    @staticmethod
    def store_stat_calculations():
        # open a pickle file
        filename = f'logs/stat_calculations.pk'

        with open(filename, 'wb') as fi:
            # dump your data into the file
            pickle.dump(steveIrwin.nftStatsTable, fi)

    @staticmethod
    def fetch_stat_calculations():
        try:
            filename = f'logs/stat_calculations.pk'
            with open(filename, 'rb') as fi:
                steveIrwin.nftStatsTable = pickle.load(fi)
        except:
            try:
                print("No previously stored stats...")
                os.mkdir('logs')
            except:
                print("Found log folder...")

    @staticmethod
    def predict_hit(attacker, defender):
        
        # hash the hit so we never recalc the hit
        e = attacker
        a = defender
        
        attacker_attack = attacker['attack']
        attacker_defense = attacker['defense']
        attacker_fatal = attacker['fatal']
        
        defender_attack = defender['attack']
        defender_defense = defender['defense']
        defender_fatal = defender['fatal']
        
        attacker_data = f'{attacker_attack},{attacker_defense},{attacker_fatal}'
        defender_data = f'{defender_attack},{defender_defense},{defender_fatal}'
        
        hit_hash = hashlib.sha256(f'{attacker_data}{defender_data}'.encode()).hexdigest()
        
        # Add our battle_hash
        if hit_hash not in steveIrwin.hit_hashes:

            # The .5 is actually normally a random number from JS. I am setting it to 50%
            rand = math.floor(100 * 0.5) <= 100
            fatal = e['fatal']
            crit = rand*fatal

            # The .5 is actually normally a random number from JS. I am setting it to 50%
            attack_mod = (5 - 333 * (0.5) % 10) / 100
            defense_mod = (5 - 444 * (0.5) % 10) / 100

            attack = math.floor((e['attack'] * (1 + attack_mod)))
            defense = math.floor((a['defense'] * (1 + defense_mod)))

            crit_text = f'{crit} ? 2 : 1'
            
            temp = js2py.eval_js(crit_text)

            outcome = math.floor(((attack - defense) * (temp) * (1 + e['fatal'])))
            
            
            return_temp = ((1 == e['gift'] and 2 == a['gift']) or (2 == e['gift'] and 5 == a['gift']) or (
                3 == e['gift'] and 4 == a['gift']) or (4 == e['gift'] and 1 == a['gift']) or (5 == e['gift'] and 3 == a['gift']))

            return1 = return_temp and outcome
            return2 = ((attack - defense) < (.1 * attack)
                    ) and (outcome == .1 * attack)
            
            if (attack - defense) < (.1 * attack):
                outcome = .1 * attack

            outcome = outcome * 1.1
            steveIrwin.hit_hashes[f'{hit_hash}'] = outcome
            
            steveIrwin.store_hit_hashes()

            # a.blood = a.blood - outcome # a.blood

            # return5 = a.blood -le 0 and (a.death == !0)
        else:
            outcome = steveIrwin.hit_hashes[f'{hit_hash}']
        return outcome

    @staticmethod
    def combat_cards(attacker, defender):
        # attacker hit
        attacker_hit = steveIrwin.predictHit(attacker, defender)
        # defender hit
        defender_hit = steveIrwin.predictHit(attacker, defender)

        defender.live -= attacker_hit
        attacker.live -= defender_hit

        return [attacker, defender]

    @staticmethod
    def shop_keeper(menu):
        # Menu is an array of items piped in to spit out to the user
        
        print(f'{menu[0]}')
        index = 1
        max_idx = len(menu)
        for index in range(1,max_idx):
          print(f'{index}. {menu[index]}')
          index += 1
        
        print('FYI: This is a dumb menu that doesn\'t validate anyuthing, and WILL let you fuck it up, so don\'t fuck up the input')
        response = input('Please select an option: ')

        return (int(response) - 1)

    @staticmethod
    def run_event():
        # This function will take the list of configured combatants, and present you with the option to pick one to battle with
        from reptile_house import hodlers_info
        hodlers = hodlers_info.hodlers
        # Make menu list
        menu = ['Please select a player to use for combat']
        for hodler in hodlers:
          menu += [hodler['user_name']]
        
        option = steveIrwin.shop_keeper(menu)

        hodler = hodlers[option]
        user_name = hodler['user_name']
        account_id = hodler['user_id']
        token = hodler['token']
        newbie = hodler['newbie']
        print(f'You selected the hodler {user_name} to fight as, good choice!')

        zoo_entry = reptileCentral(user_name,account_id,token,newbie)
        zoo_entry.enter_combat()
   
    @staticmethod
    def store_hit_hashes():
        # open a pickle file
        filename = f'logs/hit_hashes.pk'
        filename_temp = f'logs/hit_hashes_temp.pk'

        with open(filename_temp, 'wb') as fi:
            # dump your data into the file
            pickle.dump(steveIrwin.hit_hashes, fi)
        shutil.copy2(filename_temp,filename)
    
    @staticmethod
    def fetch_hit_hashes():
        try:
            filename = f'logs/hit_hashes.pk'
            with open(filename, 'rb') as fi:
                steveIrwin.hit_hashes = pickle.load(fi)
        except:
            try:
                print("No previously stored hit hashes...")
                os.mkdir('logs')
            except:
                print("Found log folder...")

    @staticmethod
    def fix_the_books(user_name):
      the_books = reptileCentral(user_name=user_name,no_token=True,newbie=False)
    
    @staticmethod
    def fix_all_the_books():
        user_list = (steveIrwin.fetch_json_from_url('https://api2.zoogame.finance/api/pvp/realRanking?currentPage=1&perPage=5000'))['data']
        for item in user_list:
            user_name = item['nickname']
            reptileCentral(user_name=user_name,no_token=True,newbie=False)
