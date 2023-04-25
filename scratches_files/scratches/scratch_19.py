import os

for folderName, subFolders , filenames in os.walk("/Users/thomas/PycharmProjects"):
    print('The current folder is ' + folderName)

    for subFolder in subFolders:
        print('Subfolder of %s: %s'%(folderName,subFolder))
    for filenames in filenames:
        print('File inside : %s'%(filenames))

    print('')