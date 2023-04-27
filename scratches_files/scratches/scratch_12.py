import re

# text = "ABCDEFabcdef123450*&%@#!}{"
#
# regex = re.compile(r'[a-z0-9]')
#
# result = regex.findall(text)
#
# print(result)

#a followed by zero or more b's
def is_allowed_string(string):
    regex = re.compile(r'^a(b+)$')
    match = regex.search(string)
    if match:
        print('Found a match!')
        print(match)
    else:
        return 'Can\'t find a match!'

print(is_allowed_string("ac"))
print(is_allowed_string("abc"))
print(is_allowed_string("a"))
print(is_allowed_string("ab"))
print(is_allowed_string("abb"))
