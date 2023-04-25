import zipfile,os

target_folder_name = "/Users/thomas/PycharmProjects/Test spam/"
target_folder_path = "/Users/thomas/PycharmProjects/Test spam copy"

zipfile_name = target_folder_name + ".zip"

# Start create a ZipFile object
with zipfile.ZipFile(zipfile_name,'w',zipfile.ZIP_DEFLATED) as zip_ref:
    for root, dirs, files in os.walk(target_folder_path):
        for file in files:
            file_path = os.path.join(root,file)
            zip_ref.write(file_path,os.path.relpath(file_path,target_folder_path))
            print('Complete compressing file %s'%(file))