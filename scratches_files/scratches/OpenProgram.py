import subprocess, time

timeLeft = 100
while timeLeft > 0:
    print(timeLeft)
    time.sleep(0.5)
    timeLeft -= 1

print('Time is up!')
app_name = 'Notion'

time.sleep(1)
print(f"Opening {app_name} !")
subprocess.Popen(['open', '-a', app_name])