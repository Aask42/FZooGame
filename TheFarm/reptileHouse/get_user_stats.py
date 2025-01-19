import os
from reptile_house.steveIrwin import steveIrwin

def write_file(filename,content):
    with open(filename, 'a', encoding='utf-8') as file:
        file.write(content)
        file.write('\n')

os.system('cls')
ringmaster = steveIrwin

ringmaster.fix_all_the_books()
