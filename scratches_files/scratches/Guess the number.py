# This is a guess the number game.
import random
import time

while True:
    yourName = input('Hello, what is your name ? \n ')
    if yourName.isnumeric():
        print('Please type in a proper name!')
        continue
    else:
        print('Well, Hello ' + yourName +','+' nice to meet you!')
        break

time.sleep(2)
print('I am thinking a number between 1 and 20. Please make a guess! ')

time.sleep(0.5)
theNumber = random.randint(0,20)

guess = []

def delay ():
    time.sleep(1)

def guessAlert(guessQuan):
    if 5 > guessQuan > 3:
        time.sleep(1)
        print(' \n You already had ' + str(guessQuan) +'/6' + ' attempt! \n')
        time.sleep(1.25)


for guessQuan in range (1,7):
    guessNumber = int(input(' \n Input a number here: '))

    while guessNumber in guess:
        print('You have already guessed that number! Please choose another')
        guessNumber = int(input('Type the number here:'))

    guess.append(guessNumber)

    if guessNumber < theNumber:
        guessAlert(guessQuan)
        if guessQuan < 6:
            print(' \n Make it higher ')
        delay()

    elif guessNumber > theNumber:
        guessAlert(guessQuan)
        if guessQuan < 6:
            print(' \n Make it lower, please! ')
        delay()
    else:
        break # This condition is for the correct guess!

if guessNumber == theNumber:
    if guessQuan > 4:
        print('Congrats! You have found the correct number, which is ' + str(guessNumber) + ' ! After ' + str(guessQuan) + ' attempts! ')
    elif guessQuan == 1:
        print('You are a genius! You just need ' + str(guessQuan) + ' attempt to find the number! ')
    else:
        print('You are a genius! You just need ' + str(guessQuan) + ' attempts to find the number! ')
else:
    time.sleep(1.5)
    print( '\n \n' + 'It''s the fucking ' + str(theNumber) + ' idiot! \n')
    time.sleep(0.5)
    print('Good Bye! \n')
    time.sleep(2)
    print('Idiot!')