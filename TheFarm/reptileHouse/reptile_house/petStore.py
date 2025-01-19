from reptile_house.steveIrwin import steveIrwin
import copy


class petStore():
    @staticmethod
    def __init__():
        petStore.scout = steveIrwin()

    @staticmethod
    def who_is_stronger(attacker, defender):
        attacker_hit = petStore.scout.predict_hit(
            attacker, defender)
        defender_hit = petStore.scout.predict_hit(
            defender, attacker)
        attacker_num_turns = 0
        defender_num_turns = 0
        if defender_hit > 0:
            attacker_num_turns = attacker['live'] / defender_hit
        if attacker_hit > 0:
            defender_num_turns = defender['live'] / attacker_hit

        if attacker_num_turns < defender_num_turns:
            return defender

        return attacker

    @staticmethod
    def ethical_animal_combat_tournament(rarity):
        # Cycle through ALL cards from all the teams where they have a rarity up to 3 and a level 1

        target_combatants = []

        for card in petStore.scout.upgrade_table:
            if card['rarity'] is not None and card['rarity'] <= rarity:
                if card['fatal'] is not None:
                    target_combatants += [card]

        best_combatant = target_combatants[0]
        for combatant in target_combatants:
            best_combatant_temp = copy.copy(best_combatant)
            target = copy.copy(combatant)
            if best_combatant_temp is None:
                print("STOP")
            best_combatant = copy.copy(
                petStore.who_is_stronger(best_combatant_temp, target))
        out_string = best_combatant['name']
        out_team = best_combatant['teamId']
        print(
            f'The best combatant of rarity {rarity} is... {out_string} on team {out_team}\n')

    @staticmethod
    def calc_all_combat_rarities():
        petStore.ethical_animal_combat_tournament(1)
        petStore.ethical_animal_combat_tournament(2)
        petStore.ethical_animal_combat_tournament(3)
        petStore.ethical_animal_combat_tournament(4)
        petStore.ethical_animal_combat_tournament(5)
