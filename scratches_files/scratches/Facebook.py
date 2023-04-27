# Facebook Group posting
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import time
from undetected_chromedriver import ChromeOptions

# Prerequisite Infomation
browser = webdriver.Chrome()
url = "https://www.facebook.com/"
user_name = 'iloveopno1@yahoo.com.vn'
password = 'Dinhngocchimai306'

# Handle Browser-level Notification Request
option = Options()
option.add_argument("--disable-infobars")
option.add_argument("start-maximized")
option.add_argument("--disable-extensions")
# Pass the argument 1 to allow and 2 to block
option.add_experimental_option("prefs", {
    "profile.default_content_setting_values.notifications": 1
})

browser = webdriver.Chrome(options=option, executable_path='/usr/local/bin/chromedriver')
browser.get(url)

# Login Facebook
browser.find_element(By.ID, "email").send_keys(user_name)
browser.find_element(By.ID, "pass").send_keys(password)
time.sleep(1)
browser.find_element(By.NAME, "login").click()
time.sleep(6)
# Switch Profile
# browser.find_element(By.XPATH,'//div[@class="x78zum5 x1n2onr6"]').click()
browser.find_element(By.XPATH,).click()

# Please don't close the browser windows
time.sleep(100)
