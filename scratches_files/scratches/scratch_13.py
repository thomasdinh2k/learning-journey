import pyinputplus as pyip

import random,time

QuesNum = 10
correctAnswer = 0

for correctAnswer in QuesNum:
    #Pick 2 random numbers:
    num1 = random.randint(0,9)
    num2 = random.randint(0,9)


    prompt = 'Question: %s : %s x %s = ' %(QuesNum,num1,num2)

    #Right answers are handle with allowRegexes
    pyip.inputStr('Hello NIGGA!!!',prompt,allowRegexes=['^%s$'%(num1*num2)],blockRegexes=[('.*','Incorrect!')],timeout=8,limit=3)
    #Wrong answers are handle with blockRegexes

    except pyip.TimeoutException:
        print('Out of time')
    except pyip.RetryLimitException:
        print('Out of tries!')
    else:
        #This block runs if no exceptions were raise in the try block
        print('Correct')
        correctAnswer += 1

        time.sleep(1)
    print('Score %s / %s' %(correctAnswer,QuesNum))