import tkinter

import Back_end
from tkinter import *

# Create Tk object
window = Tk()
window.title("Book Inventory Program")


def view_command():
    lb1.delete(0, END)
    print("Viewing the book list")
    for row in Back_end.view():
        # print(row)
        lb1.insert(END, row)  # The new row will append at the end


def search_command():
    lb1.delete(0, END)
    for row in Back_end.search(Title_text.get(), Author_text.get(), Year_text.get(), ISBN_text.get()):
        if row == []:
            lb1.insert(END, 'Search something?')
            print(row)
            print('nothing')
        else:
            lb1.insert(END, row)
            print(row)


def quit_program():
    window.quit()


def get_selected_row(event):
    global selected_tuple
    try:
        index = lb1.curselection()[0]
        selected_tuple = lb1.get(index)
        print(selected_tuple)
    except:
        pass
        # print("User Clicking Wrong Place")
    # Fill up selected row
    e1.delete(0, END)
    e1.insert(0, selected_tuple[1])
    e2.delete(0, END)
    e2.insert(0, selected_tuple[3])
    e3.delete(0, END)
    e3.insert(0, selected_tuple[2])
    e4.delete(0, END)
    e4.insert(0, selected_tuple[4])
def delete_command():
    Back_end.delete(selected_tuple[0])

def update_command():
    Back_end.update(selected_tuple[0], Title_text.get(), Author_text.get(), Year_text.get(), ISBN_text.get())
    print(selected_tuple[0], Title_text.get(), Author_text.get(), Year_text.get(), ISBN_text.get())
    lb1.insert(0, f"Updated item {Title_text.get()}")
    lb1.insert(1, selected_tuple[0], Title_text.get(), Author_text.get(), Year_text.get(), ISBN_text.get())

def add_command():
    Back_end.insert(Title_text.get(), Author_text.get(), Year_text.get(), ISBN_text.get())
    lb1.delete(0, END)
    lb1.insert(END, "Book inserted:...")
    lb1.insert(END, '***\n\n\n')
    lb1.insert(END, [Title_text.get(), Author_text.get(), Year_text.get(), ISBN_text.get()])

    popup = tkinter.Toplevel()
    popup.wm_title("Pop-up Notification")
    label = tkinter.Label(popup, text='Success')
    label.pack(side="top", fill="x", pady=10)
    button = tkinter.Button(popup, text="Okay", command=popup.destroy)
    button.pack()


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
lb1.grid(row=2, column=0, columnspan=2, rowspan=6)  # widget will occupy (3 columns | 6 rows)  in the grid layout

lb1.bind('<<ListboxSelect>>', get_selected_row)

# Create a scrollbar
scb1 = Scrollbar(window, width=15)
scb1.grid(column=2, row=2, rowspan=6, sticky=S + N)

# Configure method for the ScrollBar
lb1.configure(yscrollcommand=scb1.set)
scb1.configure(command=lb1.yview)

# More buttons on the right
b1 = Button(window, text='View All', width=12, command=view_command)
b1.grid(column=3, row=2)

b2 = Button(window, text='Search Entry', width=12, command=search_command)
b2.grid(column=3, row=3)

b3 = Button(window, text='Add Entry', width=12, command=add_command)
b3.grid(column=3, row=4)

b4 = Button(window, text='Update', width=12, command=update_command)
b4.grid(column=3, row=5)

b5 = Button(window, text='Delete', width=12, command=delete_command)
b5.grid(column=3, row=6)

b6 = Button(window, text='Close', width=12, command=quit_program)
b6.grid(column=3, row=7)

window.mainloop()
