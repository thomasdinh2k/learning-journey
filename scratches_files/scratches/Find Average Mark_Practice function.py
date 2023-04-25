# #Practice Function:

#Find average marks
def find_average_marks():
    average = sum(marks)/len(marks)
    return average

subject_count = input('How many subject? \n')
marks = []

while len(marks) < int(subject_count):
    marks.append(int(input('What\'s the score:' )))
    print(marks)


average_mark = find_average_marks() #The final variable is: Average_mark
print('Average: ' + str(average_mark))

#Calcuate the grade and return it
def find_the_grade(average_mark): #Parameter (tham so):
    if average_mark >= 80:
        grade = "A"
    elif average_mark >= 60:
        grade = "B"
    elif average_mark >= 50:
        grade = 'C'
    else:
        grade = 'F'
        print('Study more!')
    return grade

grade = find_the_grade(average_mark)
print ('Your Grade is: ' + grade)












# def greet(name):
#     print('Hello ' + name)
#     return
#     print('How do you do?')
#
# greet('Jack')

#Multiple Argument
#
# def add_numbers (a,b):
#     result = a + b
#     return result
#
# a = 2
# b = 9
#
# so1 = 100
# so2 = 105
#
# result = add_numbers(so1,so2)
# print(result)