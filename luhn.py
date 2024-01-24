from datetime import date
import random
def main(arg):
    if numero_card(str(arg)):
        number = multiplicate_code(arg)
        code = add_code(number)
        if check_result(arg):
            if check_date(arg):
                if cvc_card(arg):
                    return 'tout est bon'
                else:
                    return 'le crypto n est pas bon'
            else:
                return 'la date n est pas bonne '
        else:
            return ' le code n est pas bon'
    else:
        return 'votre numéro n est pas a la bonne taille'



def numero_card(arg):
    size = 0
    for i in arg:
        if i != ' ':
            size += 1
    if size == 16:
        return True
    else:
        return False

def multiplicate_code(arg):
    number = 0
    mergeNumber = 0
    for i in str(arg):
        if len(str(i)) > 1:
            for j in i:
                mergeNumber += int(j)
            number = mergeNumber
            mergeNumber = 0
        else:
            number += int(i)
    return number

def add_code(arg):
    if arg <= 0:
            return ValueError
    else:
        number = 0
        for i in str(arg):
            number += int(i)
        return number

def check_result(arg):
    if arg <= 0 or arg > 140 or arg % 10 != 0:
        return False
    else:
        return True

def check_date(arg):
    today = date.today()
    d1 = today.replace(year = today.year + 2).strftime("%m/%Y")
    return d1

def cvc_card(arg):
    number = 0
    for i in range (3):
        number += random.randrange(1,9)
    return number

if __name__ == '__main__':
    main(1234567890123456)

