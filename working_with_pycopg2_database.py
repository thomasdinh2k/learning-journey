import psycopg2
import pyinputplus as pa

global table_name
table_name = ''


def separator():
    print("*" * 50)
    print('\n' * 1)


def choosing_table():       # Choose which table to execute actions
    connection = psycopg2.connect("dbname='database1' user='postgres' password='1820' host='localhost' port='5432'")
    cursor = connection.cursor()
    cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE';")
    table = cursor.fetchall()
    option_list = [option[0] for option in table]
    # noinspection PyTypeChecker
    table_option = pa.inputMenu(option_list, prompt="Please choose database:\n", numbered= 1)
    return table_option


def ask_for_insert():       # Ask user to enough input to make a table in database
    var_num = pa.inputInt(prompt="How many variable do you want? ", min=1)
    column_names = []
    result_string = {}
    for i in range(1, var_num + 1):
        column_name = pa.inputStr(prompt=f"Enter variable name for variable {i} :\n")
        data_list = ['TEXT', 'INTEGER', 'BOOLEAN', 'DATE', 'TIME', 'DECIMAL', 'FLOAT']
        sql_data_type = pa.inputMenu(data_list, prompt="What's the datatype?\n", numbered=True)
        result_string[column_name] = sql_data_type
        i += 1
    # Convert Result_string to list
    result_string_keys = list(result_string.keys())
    result_string_values = list(result_string.values())
    # Append to final list
    final_result = []
    for i in range(len(result_string_keys)):
        final_result.append(f"{result_string_keys[i]} {result_string_values[i]}")
    final_result_text = ', '.join(final_result)
    # table_name = choosing_table()
    # done = f"CREATE TABLE IF NOT EXISTS {table_name} {final_result_text}"
    return final_result_text


def view(table_name=None):
    if table_name == 'None':
        table_name = choosing_table()
    else:
        pass
    connection = psycopg2.connect("dbname='database1' user='postgres' password='1820' host='localhost' port='5432'")
    cursor = connection.cursor()
    cursor.execute(f"SELECT * FROM {table_name}")   # Obtain Data from the database
    rows = cursor.fetchall()
    connection.close()
    print(f"\nTable {table_name.upper()} contains:\n ")
    for row in rows:
        print(row, end="\n")
    separator()
    return table_name


def create_table():
    connection = psycopg2.connect("dbname='database1' user='postgres' password='1820' host='localhost' port='5432'")
    cursor = connection.cursor()
    table_name = pa.inputStr(prompt="What is the name of this new table?\n")
    execute_line = ask_for_insert()
    print(f"CREATE TABLE IF NOT EXISTS {table_name} ({execute_line})")
    cursor.execute(f"CREATE TABLE IF NOT EXISTS {table_name} ({execute_line})")
    connection.commit()
    cursor.close()
    connection.close()
    print(f"TABLE {table_name} HAS BEEN CREATED SUCCESSFULLY")


def insert_item():
    table_name = choosing_table()
    connection = psycopg2.connect("dbname='database1' user='postgres' password='1820' host='localhost' port='5432'")
    cursor = connection.cursor()
    cursor.execute(f'''
        SELECT column_name, data_type
        FROM information_schema.columns
        WHERE table_name = '{table_name}' 
    ''')
    table_property = cursor.fetchall()
    # return table_column
    print(table_property)
    table_column_name = []
    adding_value = []

    for i in range(len(table_property)):
        table_column_name.append(table_property[i][0])
        adding_value_text = input((f"Type input for column [{table_property[i][0]}]:\n"))
        if adding_value_text.isalpha():
            adding_value_text = f"\'{adding_value_text}\'"
            adding_value.append(adding_value_text)
        else:
            adding_value.append(adding_value_text)
    for value in table_column_name, adding_value:
        column_name_string = ', '.join(table_column_name)
        # adding_value_string = ', '.join(adding_value)
        adding_value_string = ', '.join(adding_value)

    print(f"INSERT INTO {table_name} ({column_name_string}) VALUES ({adding_value_string})")
    cursor.execute(f"INSERT INTO {table_name} ({column_name_string}) VALUES ({adding_value_string})")
    connection.commit()
    print(f"Value {adding_value} added into {table_name} successfully!")

    view(table_name)


    cursor.close()
    connection.close()

# TODO: Fix Delete_item
def delete_item():
    connection = psycopg2.connect("dbname='database1' user='postgres' password='1820' host='localhost' port='5432'")
    cursor = connection.cursor()
    table_name = choosing_table()
    cursor.execute(f"DELETE FROM {table_name} WHERE item=%s", (item,))       # Must have "," after item if this have one item only
    connection.commit()
    connection.close()
    print("ITEM ({}) DELETED SUCCESSFULLY".format(item.upper()))

# TODO: Fix update_item
def update_item():
    connection = psycopg2.connect("dbname='database1' user='postgres' password='1820' host='localhost' port='5432'")
    cursor = connection.cursor()
    global table_name
    if table_name == '':
        table_name = choosing_table()
    if table_name == "store":
        item = pa.inputStr(prompt="Which item is this? ")
        quantity = pa.inputInt(prompt="How many item? ")
        price = pa.inputInt(prompt="What's the price then? ")
        cursor.execute(f"UPDATE {table_name} SET quantity=%s, price=%s WHERE item=%s", (quantity, price, item))       # Must have , after item
        print("ITEM ({}) UPDATED SUCCESSFULLY".format(item.upper()))
    else:
        print('THIS FUNCTION IS CURRENTLY UNDER DEVELOPMENT')
    connection.commit()
    connection.close()
    return table_name

print("Welcome to Database Pycopg2 Tool")
database_action = ['View', 'Insert', 'Update', 'Delete', 'Quit']
while True:
    user_choice = pa.inputMenu(database_action, prompt="What do you want to do?\n", numbered=True)
    if user_choice == 'View':
        view()
    elif user_choice == 'Insert':
        insert_item()
    elif user_choice == 'Update':
        update_item()
    elif user_choice == 'Delete':
        delete_item()
    else:
        break
print("Goodbye")
