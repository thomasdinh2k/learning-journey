import random
guess = 0
guess_h = ''
while guess_h not in ('heads', 'tails'):
    print('Guess the coin toss! Enter heads or tails:')
    guess_h = input()
    if guess_h == "heads":
        guess = 1
    else:
        guess = 0

toss = random.randint(0, 1) # 0 is tails, 1 is heads
if toss == guess:
    print('You got it!')
else:
    print('Nope! Guess again!')
    guesss = input()
    if toss == guess:
        print('You got it!')
    else:
        print('Nope. You are really bad at this game.')