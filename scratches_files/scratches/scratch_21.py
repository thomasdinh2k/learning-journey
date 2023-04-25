import csv
exampleFile = open('/Users/thomas/Library/CloudStorage/OneDrive-Personal/Download/automate_online-materials/example.csv')
exampleReader = csv.reader(exampleFile)
for row in exampleReader:
        print('Row #' + str(exampleReader.line_num) + ' ' + str(row))