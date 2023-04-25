import ezgmail, os
# Checking credentials
os.chdir("/Users/thomas/Library/CloudStorage/OneDrive-Personal/Python Coding/Credentials/Gmail")
print(f'Work directory has been changed to {os.getcwd()}')
print('Sending....')
# Sender and recipient
Sender = 'mantht01288448987@gmail.com'
recipient = 'tungdns@nerman.asia'
# Email Content
Subject = "This email is just a test 2"
Body = ' But you can believe in it anyway! \nOr don\'t '

# Code to make it work
try:
    ezgmail.send(recipient,Subject,Body,cc='work.dnstung@gmail.com')
    print('Email sent successfully!')
except Exception as e:
    print(f'Error sending email: {e} \n\nPlease have a look and do not give up!')


