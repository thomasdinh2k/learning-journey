## Walking a directory tree

import os

folder_dir = "/Users/thomas/Library/CloudStorage/OneDrive-Personal/Download/Khóa học Python. Dũng lại lập trình/Học python"

## Rename all file and put out ":*?"<>"
def replace_chars(filename):
    char_dict = {':': ' . ', '*': ' . ', '?': ' . ', '<': ' .', '>': ' . ' , '/':' . ' , '\\': ' . '}
    for char,replacement in char_dict.items() :
        filename = filenames.replace(char,replacement)
    return filename

## Traverse the directory tree and rename files
for folderName, subFolders , filenames in os.walk(folder_dir):
    print('The current folder is ' + folderName)

    for subFolder in subFolders:
        print('Subfolder of %s: %s'%(folderName,subFolder))
    for filenames in filenames:
        print('File inside : %s'%(filenames))

    print('')

new_filename = replace_chars(filenames)
os.rename(os.path.join(folderName,filenames), os.path.join(folderName,new_filename))
print(' ')

