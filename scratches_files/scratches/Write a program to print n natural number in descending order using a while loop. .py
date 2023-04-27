
a = int(input('Type in a number: '))
import time

while a in range (a,0,-1):
    print(a,end=' ')
    time.sleep(0.25)
    a -= 1