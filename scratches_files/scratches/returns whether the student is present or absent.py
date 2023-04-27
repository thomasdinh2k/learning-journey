# Use a list to store sample roll. no.
# Get input from a user and check if the number exist in the list or not, if exists return present
# else return absent

attendance = [1,2,3,4,5,6,7,8,9,10]

def check_attendance(attendance_number):
    if attendance_number in attendance:
        return 'present'
    else:
        return 'absent'
#We are comparing int to int so remember to put (int)
attendance_number = int(input('Please input your student number: \n' ))

check_attendance(attendance_number)

print(check_attendance(attendance_number))

