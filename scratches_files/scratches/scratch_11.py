import re

dates = '''
Hello World
123
1240421
Mr Simpson
Mrs Simpson
Mr. Brown
Ms Smith
Mr. T
pythonengineer@gmail.com
Python-engineer@gmx.de
python-engineer123@my-domain.org
python-engineer123@my-domain.vn
python-engineer123@my-domain.orgẻ
'''

#Find all and export as a line
pattern2 = re.compile(r'(Mr|Ms|Mrs).\s\w+')
pattern_ex = re.compile(r'(Mr|Ms|Mrs)\.?\s\w+')
pattern3 = re.compile(r'(Mr|Ms|Mrs)\.?\s(\w+)')
pattern_email = re.compile(r'([a-zA-Z0-9-_]+)@([a-zA-Z0-9-_]+)\.(\w{2,3})')




print('\n Find all email:  ', pattern_email.findall(dates))

#Find Email in group
matches = pattern_email.finditer(dates)

for match in matches:
    print(match.group(3))


