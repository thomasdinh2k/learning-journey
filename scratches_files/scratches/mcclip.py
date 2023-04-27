# Multi-clipboard automatic message

# mcclip.py - A multi-clipboard program

# Step 1: Program design and Data structure
TEXT = {'agree': "Yes. That's sound totally acceptable!",
        'busy' : "I'm sorry I ain't available at the moment",
        'upsell' : "Buy more, bitch!"}
# Step 2: Handle Command Line Arguments
import sys,pyperclip

if len(sys.argv) < 2: # The code checks if the number of arguments passed to the program is less than 2
    print('Usage: python mclip.py [keyphrase] - copy phrase text')
    sys.exit()

keyphrase = sys.argv[1] # First command line arg is the keyphrase
# Step 3: Copy the right phrase
if keyphrase in TEXT:
    pyperclip.copy(TEXT[keyphrase])
    print('Text for' + keyphrase + ' copied to clipboard.')
else:
    print("There's no text for " + keyphrase)