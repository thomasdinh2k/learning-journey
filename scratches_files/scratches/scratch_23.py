import os,send2trash

root_path = "/Users/thomas/Library/CloudStorage/OneDrive-Personal/Download"

for folderName, subFolders, filenames in os.walk(root_path):
    # print("...")
    for filename in filenames:
        path_to_getSize = os.path.join(folderName,filename)
        # print(folderName,filename)
        # print(path_to_getSize)
        size = os.path.getsize(path_to_getSize)
        if size > 1073741824:
            size_inGBs = size / (1024 ** 3)
            print('Size of %s is %s which is %.2f GBs '%(filename,size,size_inGBs))
            send2trash.send2trash(path_to_getSize)