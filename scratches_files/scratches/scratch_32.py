import pyautogui
import time

# Chờ 2 giây
time.sleep(2)

# Gõ chữ "Hỏn Hai Ngái" 1000 lần
for i in range(5):
    pyautogui.typewrite("Horn hai ngais")
    pyautogui.press("enter")