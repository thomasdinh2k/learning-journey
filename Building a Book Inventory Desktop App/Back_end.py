import sqlite3
import os


class Database:
    db_filename = "/Users/thomas/PycharmProjects/learning_project/journey/book.db"

    def __init__(self, db):
        self.connect = sqlite3.connect(Database.db_filename)
        self.cursor = self.connect.cursor()
        self.cursor.execute(
            "CREATE TABLE IF NOT EXISTS book (id INTEGER PRIMARY KEY, title TEXT, author TEXT, year INTEGER, isbn INTEGER)")
        self.connect.commit()

    def insert(self, title, author, year='2023', isbn='N/A'):
        self.cursor.execute("INSERT INTO book VALUES (NULL,?,?,?,?)", (title, author, year, isbn))
        self.connect.commit()

    def view(self):
        self.cursor.execute("SELECT * FROM book")
        rows = self.cursor.fetchall()
        return rows

    def search(self, title=None, author=None, year=None, isbn=None):
        self.cursor.execute("SELECT * FROM book WHERE title=? OR author=? OR year=? or isbn=?",
                            (title, author, year, isbn))
        rows = self.cursor.fetchall()
        # self.connect.close()
        return rows

    def delete(self, id):
        self.cursor.execute("DELETE FROM book WHERE id=?", (id,))
        self.connect.commit()
        # self.connect.close()

    def delete_all(self):
        self.cursor.execute("DELETE FROM book")
        self.connect.commit()
        # self.connect.close()

    def update(self, id, title, author, year, isbn):
        self.cursor.execute("UPDATE book SET title=?, author=?, year=?, isbn=? WHERE id=?",
                            (title, author, year, isbn, id))
        self.connect.commit()
        # self.connect.close()

    def __del__(self):
        self.connect.close()
