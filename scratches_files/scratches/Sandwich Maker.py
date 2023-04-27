#Sandwich Maker

import pyinputplus as pyip
import time

print('Welcome to the Sandwich Restaurant')
time.sleep(1)

total = 0
# Choosing bread type
bread_type={
    'wheat': 500,
    'white': 300,
    'sourdough': 1000,
    'Vietnam': 150}

bread_type_choice = pyip.inputMenu(prompt="Please select bread type: \n",
                                   choices=list(bread_type),
                                   numbered=True)
bread_type_choice_cost = bread_type[bread_type_choice]
print('Your choice is %s....which costs %s'%(bread_type_choice,bread_type_choice_cost))
total += bread_type_choice_cost

# Choosing protein type
protein_type = {
    'chicken': 5000,
    'turkey': 7500,
    'ham': 3000,
    'eggs': 3000,
    'tofu' : 1500}
time.sleep(0.5)
protein_type_choice = pyip.inputMenu(prompt="Next, Please choose protein type: \n",
                                     choices=list(protein_type),
                                     numbered=True)
protein_type_choice_cost = protein_type[protein_type_choice]
print('Added %s - %s to the list' %(protein_type_choice,protein_type_choice_cost))
total += protein_type_choice_cost

time.sleep(0.5)

# Cheese_Option
cheese_choice = pyip.inputYesNo(prompt="Do you want some cheese?")
if cheese_choice == 'yes':
    # Ask which type of cheese
    global cheese_type_choice, cheese_type_choice_cost
    cheese_type = {
        'cheddar':350,
        'Swiss':1000,
        'Mozzarella':500
    }
    cheese_type_choice = pyip.inputMenu(prompt="OK! Which type of cheese? \n",
                                        choices=list(cheese_type),
                                        numbered=True)
    cheese_type_choice_cost = cheese_type[cheese_type_choice]
    print('Added %s - %s to the list' % (cheese_type_choice,cheese_type_choice_cost))
    total += cheese_type_choice_cost

else:
    print('Ok then!')
    cheese_type_choice = 0
    cheese_type_choice_cost = 0
# List out order
time.sleep(1)
print('Let me confirm your order')
time.sleep(3)
print('You\'ve ordered: ....' )
time.sleep(1)
print('Bread type: %s - %s'%(bread_type_choice,bread_type_choice_cost))
time.sleep(1)
print('Protein type: %s - %s'%(protein_type_choice,protein_type_choice_cost))
time.sleep(1)

if cheese_type_choice != 0:
    print('Cheese? - %s | %s - %s'%(cheese_choice,cheese_type_choice,cheese_type_choice_cost))
else:
    print('\n')
time.sleep(1)


# Ask for amount of sandwiches
total += 20000
sandQuan= pyip.inputNum(prompt='You have successfully choosen the ingredient, which cost %s. \n\nHow many sandwhiches?'%('{:,.0f} VND'.format(total)),
                        greaterThan=0)
final_total = total*sandQuan
final_total_formatted = '{:,.0f} VND'.format(final_total)
print('Confirm %s sandwhiches. \nYour order total is %s'%(sandQuan,final_total_formatted))
time.sleep(1)
print('Thank you and have a nice day!')
