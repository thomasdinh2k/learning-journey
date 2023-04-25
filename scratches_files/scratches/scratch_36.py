import requests
from bs4 import BeautifulSoup
url = "https://sellercenter.lazada.vn/apps/order/print?jobId=8dadb4fd431890"
r = requests.get("https://sellercenter.lazada.vn/apps/order/print?jobId=8dadb4fd431890")
c = r.content

soup = BeautifulSoup(c, "html.parser")

all = soup.find_all("div", {"class": "tdchild-div "})

print(all)