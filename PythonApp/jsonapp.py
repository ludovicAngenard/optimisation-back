import json
from luhn import verify

def main():

    with open("../dataSet.json") as json_data:

        spamreader = json.load(json_data)
        for row in spamreader:
            print(row)
            print(' Le numéro : ' + str(row) + 'est ' + str(verify(str(row))))

if __name__ == "__main__":
    main()
