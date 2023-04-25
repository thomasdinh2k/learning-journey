import time
number = 0
after = 0
while True:
    try:
        number = int(input('Please input a number: \n'))

        break
    except:
        print('Please Re-Enter Value')
        time.sleep(1)

after = number * 3
print(' The triple of ' + str(number) + ' is ' + str(after))
