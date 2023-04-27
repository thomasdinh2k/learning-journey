import Back_end
from tkinter import *

# Create Tk object
window = Tk()
window.title("Book Inventory Program")


def view_command():
    print("Viewing the book list")
    for row in Back_end.view():
        print(row)
        lb1.insert(END, row)  # The new row will append at the end


def create_label(window, text, column, row):
    label = Label(window, text=text)
    label.grid(column=column, row=row)


create_label(window, "Title", 0, 0)
create_label(window, "Year", 0, 1)
create_label(window, "Author", 2, 0)
create_label(window, "ISBN", 2, 1)

Title_text = StringVar()  # Function that create a spatial object
e1 = Entry(window, textvariable=Title_text)
e1.grid(column=1, row=0)

Year_text = StringVar()
e2 = Entry(window, textvariable=Year_text)
e2.grid(column=1, row=1)

Author_text = StringVar()
e3 = Entry(window, textvariable=Author_text)
e3.grid(column=3, row=0)

ISBN_text = StringVar()
e4 = Entry(window, textvariable=ISBN_text)
e4.grid(column=3, row=1)

# Create a Listbox
lb1 = Listbox(window, height=6, width=35)
lb1.grid(row=2, column=0, columnspan=3, rowspan=6)  # widget will occupy (3 columns | 6 rows)  in the grid layout

# Create a scrollbar
scb1 = Scrollbar(window)
scb1.grid(column=2, row=2, rowspan=6)

# Configure method for the ScrollBar
lb1.configure(yscrollcommand=scb1.set)
scb1.configure(command=lb1.yview)

# More buttons on the right
b1 = Button(window, text='View All', width=12, command=view_command)
b1.grid(column=3, row=2)

b2 = Button(window, text='Search Entry', width=12)
b2.grid(column=3, row=3)

b3 = Button(window, text='Add Entry', width=12)
b3.grid(column=3, row=3)

b4 = Button(window, text='Update', width=12)
b4.grid(column=3, row=4)

b5 = Button(window, text='Delete', width=12)
b5.grid(column=3, row=5)

b6 = Button(window, text='Close', width=12)
b6.grid(column=3, row=6)

window.mainloop()
