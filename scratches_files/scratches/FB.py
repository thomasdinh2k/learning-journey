import os
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait     #Built-in class
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from undetected_chromedriver import ChromeOptions
from selenium.webdriver.chrome.options import Options
import pyperclip
import pyautogui as pa

option = Options()
option.add_argument("--disable-infobars")
option.add_argument("start-maximized")
option.add_argument("--disable-extensions")
# Pass the argument 1 to allow and 2 to block
option.add_experimental_option("prefs", {
    "profile.default_content_setting_values.notifications": 1
})
driver = webdriver.Chrome(options=option, executable_path='/usr/local/bin/chromedriver')

url = "https://www.facebook.com/"
user_name = 
password = 

driver.get(url)

driver.find_element(By.ID, "email").send_keys(user_name)
driver.find_element(By.ID, "pass").send_keys(password)
driver.find_element(By.NAME, "login").click()
time.sleep(3)

driver.get("https://www.facebook.com/CuppyEmotes")
time.sleep(2.5)
driver.find_element(By.CLASS_NAME, "xwzsa0r").click()

# Go to the group
group_url = "https://www.facebook.com/groups/GirlStreamersUNITED"
time.sleep(2)
driver.get(group_url)
time.sleep(1.5)
# Post section
driver.find_element(By.XPATH, "//div[@class='x1i10hfl x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8 x1hl2dhg xggy1nq x87ps6o x1lku1pv x1a2a7pz x6s0dn4 xmjcpbm x107yiy2 xv8uw2v x1tfwpuw x2g32xy x78zum5 x1q0g3np x1iyjqo2 x1nhvcw1 x1n2onr6 xt7dq6l x1ba4aug x1y1aw1k xn6708d xwib8y2 x1ye3gou']//span[text()='Bạn viết gì đi...']").click()
# Start posting
with open('/Users/thomas/Library/CloudStorage/OneDrive-Personal/Python Coding/Selenium_Projects/Sample Content/context', 'r') as file:
    content = file.read()
    pyperclip.copy(content)
    print(content)

time.sleep(1)

post = driver.find_element(By.XPATH, "//div[@class='_1mf _1mj']//span//br")

post.send_keys(content)

# Adding pictures
image_path = "/Users/thomas/Library/CloudStorage/OneDrive-Personal/Python Coding/Selenium_Projects/Sample Content/Images/8.png"
gpt = '//div[@class="x6s0dn4 x78zum5 x5yr21d xl56j7k x1n2onr6 xh8yej3"]/img'
button_element = driver.find_element(By.XPATH, gpt)
button_element.click()



gpt_2 = '/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/div/div[1]/form/div/div[1]/div/div/div[1]/div/div[2]/div[1]/div[1]/div[2]/div/div[1]/div/div[1]/div/div[1]/div/div/div'
try:
    time.sleep(3)
    upload_button = driver.find_element(By.XPATH, gpt_2)
    upload_button.click()
    upload_button.send_keys(image_path)
#     print("Image Imported Successfully!")
except:
    raise Exception
time.sleep(1130)

