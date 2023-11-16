import os

dir_path = "/Users/thomas/coding/learning-journey/MR-VIETHOANG-COURSE/HTML-CSS/the-pico-project/images/slider"

files = os.listdir(dir_path)

html_code = ''

for i in range(6, 10, 1):
    html_code += f'''
          <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="{i}"
                aria-label="Slide {i + 1}"
            ></button>
          '''

print(html_code)
