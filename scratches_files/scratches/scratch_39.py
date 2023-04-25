from tkinter import *

windows = Tk()

def years_old():
    print(e1_value.get())
    print("Success!")
def years_old_2():
    print(2023-f1_value.get())

def km_to_miles():
    print(e1_value.get())
    t1.insert(END, e1_value.get())

b1 = Button(windows, text="Execute", command=km_to_miles)
b1.grid(row=0, column=0)

e1_value = StringVar()
e1 = Entry(windows, textvariable=e1_value)
e1.grid(row=0, column=1)

f1_value = IntVar()
f1 = Entry(windows, textvariable=f1_value)
f1.grid(row=1, column=1)
f1b = Button(windows, text="Calculate", command=years_old_2)
f1b.grid(row = 1, column=0)

t1 = Text(windows, height=1, width=20)
t1.grid(row=0, column=2)

windows.mainloop()