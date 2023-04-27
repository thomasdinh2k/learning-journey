import re
#Create a Regex
name_regex = re.compile(r'''
    (?:Alice|Bob|Carol) #Fist Word
    \s
    (?:eats|pets|throws)#Second Word
    \s
    (?:apples|cats|baseballs)#Third Word
    \. #Ends with a period

''',re.IGNORECASE|re.DOTALL|re.VERBOSE)

name_regex_test = re.compile(r'cats. $')
text = """It must match the following:

- Alice eats apples.
- Bob pets cats.
- Carol throws baseballs.
- Alice throws Apples.
- BOB EATS CATS.
- BOB EATS ALICE.
- CAROL THROWS BASEBALLS.
- Carol eats cats.
- carol throws baseballs.
- CAROL THROWS BASEBALLS.
but not the following:

- RoboCop eats apples.
- ALICE THROWS FOOTBALLS.
- Carol eats 7 cats. """

#RegeX search in text
found2 = name_regex_test.findall(text)
print('Found all:   ',found2)