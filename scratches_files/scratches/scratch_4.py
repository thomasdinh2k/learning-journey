print('How many cat do you have?')
numCats = input()
try:
    if int(numCats) >= 4:
        print('You have ' + numCats + ' cats \n')
        print('And that is a lot of cats')
        if int(numCats) == 0:
            print('Poor you')
    else:
        print('That''s not many cats')
except:
    if str(numCats) == 'six':
        print('Clever you!')
    else:
        print('You did not enter a number (of cats)')