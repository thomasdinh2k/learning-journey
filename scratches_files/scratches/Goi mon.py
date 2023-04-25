import time

spam = ["Pho", "Banh mi", "Bun cha", "Banh xeo", "Goi cuon", "Com tam", "Bun bo Hue", "Ca kho to", "Mi Quang", "Banh cuon", "Chao ga", "Bun rieu", "Nem ran", "Banh canh", "Thit kho"]

select = int(input('Verson 1 or 2?'))

if select == 1:
    while True:
        mindishNumber = int(input('What is your min lucky number? \n'))
        maxdishNumber = int(input('and what is your max? \n'))

        if mindishNumber >= maxdishNumber:
            print('Please type in a proper way')
            continue
        else:
            print('You have ordered ' + str(maxdishNumber - mindishNumber) + ' dishes')
            time.sleep(2)
            for layoutdish in spam[mindishNumber:maxdishNumber]:
                for char in layoutdish:
                    print(char, end='', flush=True)
                    time.sleep(0.15)
                print()
                time.sleep(0.5)
            print('End of order!')
            break
else:
    dishnumber = int(input('What is your favourite number?'))
    time.sleep(0.25)
    print('Your order is: ....')
    time.sleep(1)
    print(spam[dishnumber])


time.sleep(2)
print('Comming right up !!!!')
time.sleep(2)
enjoy = 'Enjoy your meal !!'
for char in enjoy:
    print(char, end='',flush=True)
    time.sleep(0.1)
print()