from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.chrome.options import Options

url = 'https://sellercenter.lazada.vn/apps/order/list?oldVersion=1&spm=a1zawf.17752401.navi_left_sidebar.droot_normal_ordersreviews_ordersnewui.5c8c4edftnzHty&status=deliveryAll'
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)
driver.maximize_window()
driver.get(url)

# Login Attempt
username = "0944867799"
password = "Nerman@12345!"
driver.find_element(By.XPATH, "//*[@id='account']").send_keys(username)
driver.find_element(By.XPATH, "//*[@id='password']").send_keys(password)
driver.find_element(By.XPATH, "//*[@id='J_page']/div[2]/div/div[2]/div/div[2]/div/form/button").click()

time.sleep(225)




# # Launch Chrome browser and open Facebook
# driver = webdriver.Chrome()
# driver.get("https://www.facebook.com/")
#
# # Find the username and password fields and send your credentials
# username_field = driver.find_element_by_id("email")
# username_field.send_keys(username)
# password_field = driver.find_element_by_id("pass")
# password_field.send_keys(password)
#
# # Find the login button and click it
# login_button = driver.find_element_by_name("login")
# login_button.click()
#
# # Verify that you have logged in by checking the URL or some element on the page
# assert "facebook.com" in driver.current_url
# assert driver.find_element_by_id("userNavigationLabel")