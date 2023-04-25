import pyinputplus as pa

var_num = pa.inputInt(prompt="How many variable do you want? ", min=1)
column_names = []
result_string = {}
for i in range(1, var_num+1):
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
print(f"CREATE TABLE IF NOT EXISTS test_2 {final_result_text}")
