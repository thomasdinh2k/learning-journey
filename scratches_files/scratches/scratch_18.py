import os
os.chdir("/Users/thomas/PycharmProjects/Test spam")
path = os.getcwd()
print (path)

for i in range (150):
    with open('spam00%s.pdf'%(i),"w") as f:
        f.write('Hello Spam!')
        print('File %s created successfully'%i)