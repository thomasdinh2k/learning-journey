def calculate_numbers(a,b):
    sum = a+b
    sub = a-b
    mul = a*b
    print('The sum is: ' + str(sum) + "\n The Sub is: " +str(sub) + "\n The Multiplication is: " + str(mul))


a = int(input('Type first value: '))
b = int(input('Type second value: '))

#Start the function
calculate_numbers(a,b)