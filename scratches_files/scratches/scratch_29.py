import os
from PIL import Image

def resize_image(imagePath, size):
    with Image.open(imagePath) as image:
        resized_image = image.resize(size)
        filename, ext = os.path.splitext(imagePath)
        new_filename = f"{filename}_{size[0]}x{size[1]}_CuppyEmotes{ext}"

        folder_path = os.path.join(os.path.dirname(imagePath), "CuppyEmotes_Exported")

        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
            new_path = os.path.join(folder_path, new_filename)
            resized_image.save(new_path)
        print(f"Ảnh {size[0]}x{size[1]} đã được resized tại {new_filename}.")

if __name__ == '__main__':
    print("Runing scratch_29.py")
    image_path = input("Please enter the path of the image to be resized: ")
    sizes = [(18,18),(36,36),(72,72),(128,128),(1025,1025),(10000,10000)]
    for size in sizes:
        resize_image(image_path,size)
    print("Task completed! Exiting...")
