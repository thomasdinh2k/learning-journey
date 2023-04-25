#Password Checker

newPassword = ''

#Ask for input
newPassword = input('Type in your desire password: \n ')

while True:
    if  len(newPassword) < 8 or not any



# while True:
#     try:
#         password = input("Enter a password: ")
#         if len(password) < 8 or not any(char.isupper() for char in password) or not any(
#                 char.islower() for char in password) or not any(char.isdigit() for char in password) or not any(
#                 char in '!@#$%^&*()_-+={}[]|:;"<>,.?/`~' for char in password):
#             raise ValueError("Invalid password")
#         break
#     except ValueError as error:
#         print(error)
#
# print("Success! Your password meets the criteria.")
