import os


dir_path = "/Users/thomas/Library/CloudStorage/OneDrive-Personal/Python Coding/PycharmProjects/[11.1] Generating Files"

for i in os.listdir(dir_path):
    if i.endswith(".txt"):
        # Construct the full path of the file
        file_path = os.path.join()