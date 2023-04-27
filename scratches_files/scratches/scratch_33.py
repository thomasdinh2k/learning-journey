import requests
from bs4 import BeautifulSoup

r = requests.get("https://pythonizing.github.io/data/example.html")

c = r.content

soup = BeautifulSoup(c, "html.parser")

all = soup.find_all("div",{"class":"cities"})
all_2 = soup.find_all("h2")

# for i in range (0, 3):
#     print(all[i].find_all("h2")[0].text)
#     print(all[i].find_all("p")[0].text)
#     print("---" * 5)
# print("Complete!")
# print(all)
# print(all_2)

# Literate through Items
for item in all:
    print(item.find_all("h1")[0].text)