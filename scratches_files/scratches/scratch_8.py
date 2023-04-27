# i=1
#
# for i in range (1,8):
#     print(int(i)*7 , end='  ')
#     i+=1


#Write a program that appends the square of each number to a new list.
def clear_screen():
    print('\n' * 50)


x=[ ]
result = []
count = 1
for i in range (7):
    x.append(int(input('Type in a number for slot ' + str(count) +': ')))
    count += 1

#Clear the console screen
clear_screen()


print('Given X = ' + str(x))

for k in range (7):
    result.append(int(x[k]**2))
    k += 1

print('Result = ' + str(result))
