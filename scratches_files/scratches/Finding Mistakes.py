import ezsheets , os , re
os.chdir('/Users/thomas/Library/CloudStorage/OneDrive-Personal/Python Coding/Project_2_21.March/venv/')
# Use Regex to find sheet_id
URL = 'https://docs.google.com/spreadsheets/d/13MKV4v1_Bu4rfPRfQIzo7-aIJ2-eDZgjoN4mhyRRhP4/edit#gid=289119951'
pattern = r"/d/([-\w]+)"
match = re.search(pattern,URL)
sheet_id = match.group(1)
print(sheet_id)
ss = ezsheets.Spreadsheet(sheet_id)
sheet = ss[0]

# Get the number of row
rows = sheet.rowCount
print('There are currently %s rows'%(rows))

# Get value and make comparison
for a in range (2, rows):
    # print('Indexing rows number %s'%(a))
    # Bean per jar
    bean = int(sheet[f'A{a}'])
    # print(bean)
    # Jars
    jar = int(sheet[f'B{a}'])
    # print(jar)
    # Total Beans
    total = int(sheet[f'C{a}'])
    total_calculated = bean * jar
    # print(total)
    # print(total_calculated)
    if total_calculated != total:
        print('!!! Error on row: %s '%(a))
        continue

print('Scan Completed')
