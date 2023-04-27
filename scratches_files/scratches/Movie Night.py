#Movie Night Seating Chart
#0:15

import time

seating = ['Seat 1 - Tung', 'Thomas', 'Chili', 'Cuppy']

print('Welcome to the Seating Chart program')
time.sleep(0.5)

personName = ''
personGen = ''
personPos = 0
while True:
    print('Here is the current list')
    print()
    print(seating)
    print()
    time.sleep(0.55)
    print('What do you want to do? \n [Type "1" to add someone] \n [Type "2" to remove someone] \n [Type "3" to complete]')
    option = input()

    if option == '1':  # Remember that the input() function returns a string, so you should compare it with a string instead of an integer
        personName = input('What is that person name? ')
        personGen = input('Male or Female? ')

        if personGen.lower() == 'male': #using .lower so that the condition checked isnt case sensitive
            personPos = int(input('In which seat does he want to sit in? '))
        elif personGen.lower() == 'female':
            personPos = int(input('In which seat does he want to sit in? '))

        seating.insert(personPos - 1,'Seat ' + str(personPos) + ' - ' + personName) #Insert person to the list

    print()


    if option == '2':
        personRemove = input('Who do you want to remove')

        seating.remove('Seat ' + str(personPos) + ' - ' + personRemove)

        print(seating)

    if option == '3':
        print('Thank you for choosing Movie Night app \n')
        time.sleep(1)
        print()
        time.sleep(0.5)
        print(seating)
        break
time.sleep(1)
print(' \n Good night !')
# Comment + /: Turn block of code into comments
# elif option == '2':
#         if not seating:
#             print('The seating chart is empty. There is no one to remove.')
#             continue
#
#         personPos = input('Which seat do you want to remove? ')
#
#         try:
#             personPos = int(personPos)
#         except ValueError:
#             print('Invalid seat position entered. Please enter a number.')
#             continue
#
#         if personPos < 1 or personPos > len(seating):
#             print('Invalid seat position entered. Please enter a number between 1 and', len(seating))
#             continue
#
#         removedPerson = seating.pop(personPos - 1)
#         print(f'{removedPerson["name"]} has been removed from seat {personPos}.')



