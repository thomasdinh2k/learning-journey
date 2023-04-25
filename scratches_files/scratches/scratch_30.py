import os
import shutil

source_dir = "/Volumes/Samsung SSD/GPT_CrashCourse/untitled folder"
dest_dir = "/Volumes/Samsung SSD/GPT_CrashCourse/untitled folder/All_zip"

for root, dirs, files in os.walk(source_dir):
    for file in files:
        if file.endswith(".zip"):
            src_file = os.path.join(root, file)
            dest_file = os.path.join(dest_dir, file)
            print('Checking %s' % (file))
            if not os.path.exists(dest_file):
                shutil.copy(src_file, dest_file)
                print(fr'{dest_file} has been copied!')