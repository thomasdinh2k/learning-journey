import sqlite3
import os

db_filename = os.path.join(os.getcwd(), 'book.db')
print(db_filename)

def connect_to_database():
    connect = sqlite3.connect("book.db")
    cursor = connect.cursor()
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS book (id INTEGER PRIMARY KEY, title TEXT, author TEXT, year INTEGER, isbn INTEGER)")
    connect.commit()
    connect.close()


def insert(title, author, year='2023', isbn='N/A'):
    connect = sqlite3.connect("book.db")
    cursor = connect.cursor()
    cursor.execute("INSERT INTO book VALUES (NULL,?,?,?,?)", (title, author, year, isbn))
    connect.commit()
    connect.close()


def view():
    connect = sqlite3.connect("book.db")
    cursor = connect.cursor()
    cursor.execute("SELECT * FROM book")
    rows = cursor.fetchall()
    connect.close()
    return rows


def search(title=None, author=None, year=None, isbn=None):
    connect = sqlite3.connect("book.db")
    cursor = connect.cursor()
    cursor.execute("SELECT * FROM book WHERE title=? OR author=? OR year=? or isbn=?", (title, author, year, isbn))
    rows = cursor.fetchall()
    connect.close()
    return rows


def delete(id):
    connect = sqlite3.connect("book.db")
    cursor = connect.cursor()
    cursor.execute("DELETE FROM book WHERE id=?", (id,))
    connect.commit()
    connect.close()


def delete_all():
    connect = sqlite3.connect("book.db")
    cursor = connect.cursor()
    cursor.execute("DELETE FROM book")
    connect.commit()
    connect.close()


def update(id, title, author, year, isbn):
    connect = sqlite3.connect("book.db")
    cursor = connect.cursor()
    cursor.execute("UPDATE book SET title=?, author=?, year=?, isbn=? WHERE id=?", (title, author, year, isbn, id))
    connect.commit()
    connect.close()

print(search())