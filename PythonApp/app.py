import csv
from luhn import verify

def main():
    with open('../dataSet.csv', newline='') as csvfile:

        spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')

        for row in spamreader:
            print(' Le numéro : ' + str(row[0]) + ' est ' + str(verify(row[0])))

if __name__ == "__main__":
    main()
