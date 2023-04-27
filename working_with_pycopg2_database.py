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


def ask_for_insert():       # Ask user for data to store in table
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
    if table_name == None:
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
    cursor.execute(f"CREATE TABLE IF NOT EXISTS {table_name} ({execute_line})")
    connection.commit()
    cursor.close()
    connection.close()
    print(f"TABLE [{table_name}] HAS BEEN CREATED SUCCESSFULLY")


def insert_item():
    table_name = choosing_table()
    connection = psycopg2.connect("dbname='database1' user='postgres' password='1820' host='localhost' port='5432'")
    cursor = connection.cursor()
    cursor.execute(f'''
        SELECT column_name, data_type
        FROM information_schema.columns
        WHERE table_name = '{table_name}' 
    ''')        # Get column_name and column_type data
    table_property = cursor.fetchall()
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


def delete_item():
    # DELETE FROM links WHERE id = 8
    connection = psycopg2.connect("dbname='database1' user='postgres' password='1820' host='localhost' port='5432'")
    cursor = connection.cursor()
    flag = True
    while flag:
        table_name = choosing_table()
        cursor.execute(f'''
                SELECT column_name, data_type
                FROM information_schema.columns
                WHERE table_name = '{table_name}' 
            ''')  # Get column_name and column_type data
        table_property = cursor.fetchall()
        print(table_property)
        table_column_name = []      # An empty string to pass data in
        table_column_value = []
        for i in range(len(table_property)):
            table_column_name.append(table_property[i][0])
            table_column_value.append(table_property[i][1])
        column_selection = pa.inputMenu(table_column_name, prompt='Which column?\n', numbered=True)
        print(table_column_name)

        # View all data in "{column_selection} column
        cursor.execute(f"SELECT {column_selection} FROM {table_name}")
        result = cursor.fetchall()
        # Test print the result
        data_bank = []
        for data_row in result:
            if data_row[0] not in data_bank:
                data_bank.append(data_row[0])
            else:
                pass
        data_bank_fix = [str(item) for item in data_bank]
        # Test if result aligned
        print(data_bank)
        data_selection = pa.inputMenu(data_bank_fix, numbered=True)
        confirm = f"DELETE FROM {table_name} WHERE {column_selection}={data_selection}"
        print(confirm)
        if pa.inputMenu(['yes', 'no'], prompt='Are you sure you want to delete\n', numbered=True) == 'yes':
            cursor.execute(confirm)
            connection.commit()
            connection.close()
            cursor.close()
        else:
            flag = False


def update_item():
    # UPDATE {table_name} SET {table_column_name} = {new_input} WHERE {table_property} = {} AND {} = {}
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
        set = input("SET? ")
        cursor.execute(f"Update {table_name} SET {set}")
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
