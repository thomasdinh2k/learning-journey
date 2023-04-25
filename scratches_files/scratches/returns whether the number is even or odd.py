# accepts a number and returns whether the number is even or odd

def def_numbers (a):

    #Return an Odd

    if a % 2 == 0:
        return 'Odd'
    else:
        return 'Even'

a = int(input('Feed me a number: '))

print(def_numbers(a))