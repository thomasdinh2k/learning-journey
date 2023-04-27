def div42by (divideBy):
    try:
        return 42/ divideBy
    except:
        print('You have tried to devided by zero \n')
        print('"None" will be the result')


print(div42by(2))
print(div42by(1))
print(div42by(0))
print(div42by(21))
print(div42by(43))
print(div42by(25))