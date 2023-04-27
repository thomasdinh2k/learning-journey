import os

# đường dẫn thư mục cha
parent_dir = "/Users/thomas/Library/CloudStorage/OneDrive-Personal/Python Coding/PycharmProjects"

# tên thư mục con
directory = "Love you"

# đường dẫn đầy đủ cho thư mục con
path = os.path.join(parent_dir, directory)

# kiểm tra nếu thư mục con không tồn tại thì tạo mới
if not os.path.exists(path):
    os.makedirs(path)

# tạo 1000 thư mục con có tên là "Love you"
for i in range(1, 1001):
    folder_name = "Love you " + str(i)
    folder_path = os.path.join(path, folder_name)
    os.makedirs(folder_path)