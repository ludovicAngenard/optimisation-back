import csv
from luhn import *

with open('../dataSet.csv', newline='') as csvfile:

    spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')

    for row in spamreader:
        numberinString = row[1:-1]
        print(verify(row[:-1]))
        print(', '.join(row))