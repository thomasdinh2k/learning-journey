import pyinputplus as pa

var_num = pa.inputInt(prompt="How many variable do you want? ", min=1)
column_names = []
for i in range(1, var_num+1):
    column_name = pa.inputStr(prompt=f"Enter variable name for variable {i}:\n")
    # Put this data type into options
    sql_data_type = ['TEXT', 'INTEGER', 'BOOLEAN', 'DATE', 'TIME', 'DECIMAL', 'FLOAT']
    pa.inputMenu(sql_data_type, prompt="What's the datatype?", numbered=True)
    i += 1
    column_names.append(column_name)

print(column_names)


for column_name in column_names:
    final = ", ".join(column_names)
print(f"CREATE TABLE IF NOT EXISTS test_2 ({final})")



