# Write a program in Python to reverse a word

# word = input('Please type in a word: \n')
# i = 0
# step = 1
# while i < len(word):
#     rev_word = word[(len(word))-step]
#     print(rev_word)
#     i += 1
#     step += 1

word = input('Please type in a word: \n')
reversed_word = ""
#Start: The last letter's position
#Stop: 0
#Step: -1 (So that it output in a reverse order)
for i in range(len(word)-1,-1,-1):
    #i is already well-inputed in range() so we just need to call it out here:
    reversed_word = reversed_word + word [i]
    # i -= 1
print(reversed_word)