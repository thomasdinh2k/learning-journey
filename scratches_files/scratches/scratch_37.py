# Putting the pieces together
import time
# It's a good weather today. How is the weather there? there are some clouds here

# Check question
# def checkQues(text):
#     word_list = ('where', 'how', 'how\'s', 'what', 'what\'s', 'why', 'do', 'does')
#     start_word_list = ('am', 'is', 'are')
#     if text in word_list or text.startswith(start_word_list):
#         return ''.join([text.capitalize(), "?"])  # Has question mark
#     elif "." in text:
#         return text.capitalize()        # Already has "."
#     else:
#         return ''.join([text.capitalize(), "."])  # No-question mark

def checkQues(text):
    word_list = ['where', 'how', 'how\'s', 'what', 'what\'s', 'why', 'do', 'does']
    start_word_list = ('am', 'is', 'are')
    if text.split()[0].lower() in start_word_list or any(word in text.lower() for word in word_list):
        return ''.join([text.capitalize(), "?"])  # Has question mark
    elif "." in text:
        return text.capitalize()        # Already has "."
    else:
        return ''.join([text.capitalize(), "."])  # No-question mark

step = 0
text = ''
paragraph = []

while text != '///.':
    if step == 0:
        text = input('Say something:..... (enter \'///.\' when you\'re done):  ')
        # print(checkQues(text))
        paragraph.append(checkQues(text))
        step += 1
    else:
        text = input("and?  ")
        paragraph.append(checkQues(text))
print("Generating paragraph...")
time.sleep(1.5)
for i in range(3):
    print(".")
    time.sleep(0.5)
for sentence in paragraph:
    if sentence != "///.":
        print(sentence, end=" ")
        time.sleep(0.5)
    else:
        pass

