import time

# Display the program instruction
print('Press ENTER to begin. Afterward, press ENTER to "click" the stopwatch. \nPress CMD+F2 to quit.')
input() # Press Enter to begin

print('Timer has started in 3')
time.sleep(1)
print(2)
time.sleep(1)
print(1)
time.sleep(1)
print('Timmer has started!')

startTime = time.time() # Get the first lap's start time
lastTime = startTime
lapNum = 1

# Start tracking the lap times.
try:
    while True:
        input()
        lapTime = round(time.time() - lastTime, 2)
        lapTime_inMinute = lapTime/60
        lapTime_inMinute_str = "{:2.f}".format(lapTime_inMinute)
        totalTime = round(time.time() - startTime, 2)
        print(' Lap #%s: %s (%s - which is convert to %s minutes)'%(lapNum,totalTime,lapTime,lapTime_inMinute_str),end='')
        lapNum += 1
        lastTime = time.time() #Reset the last lap time
except KeyboardInterrupt:
    # Handle the Ctrl+C exception to keep its error message from displaying
    print('\nProgram Done!')
    print('There are %s laps'%(lapNum))