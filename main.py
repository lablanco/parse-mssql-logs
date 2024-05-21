import pandas as pd

# Define a function to read the log data from a text file and parse it into a list of dictionaries
def parse_log(file_path, encoding='utf-16'):
    log_data = []
    with open(file_path, 'r', encoding=encoding) as file:
        record = {}
        for line in file:
            if ':' in line:
                key, value = line.strip().split(':', 1)
                record[key.strip()] = value.strip()
            elif record:  # New record or end of file
                log_data.append(record)
                record = {}
        if record:  # Append the last record if any
            log_data.append(record)
    return log_data

# Path to the log file
log_file_path = r'c:\Users\lb433\OneDrive\Documentos\mio\biox\08. MSSQL Log\LOGAUDITS_EVENTOSMODIFICACION.csv'  # Adjust the file path as needed

# Try different encodings if UTF-8 fails
encodings = ['utf-8', 'utf-16', 'latin-1']
log_data = None
for enc in encodings:
    try:
        log_data = parse_log(log_file_path, encoding=enc)
        print(f"Successfully read the file with encoding {enc}")
        break
    except UnicodeDecodeError:
        print(f"Failed to read with encoding {enc}, trying next...")

if log_data is None:
    raise ValueError("Failed to read the log file with known encodings.")

# Convert the log data list of dictionaries to a pandas DataFrame
log_df = pd.DataFrame(log_data)

# Select specific columns and filter rows based on action_id and class_type
filtered_df = log_df[['event_time', 'action_id', 'session_server_principal_name', 'class_type','server_instance_name', 'database_name', 'schema_name', 'object_name', 'statement']]
filtered_df = filtered_df[filtered_df['action_id'].str.contains('IN|DR|UP', na=False) & filtered_df['class_type'].str.contains('U', na=False)]

# Rename columns to match the SQL query output
filtered_df.rename(columns={
    'event_time': 'event_time',
    'action_id': 'action_id',
    'session_server_principal_name': 'UserName',
    'class_type': 'class_type', 
    'server_instance_name': 'server_instance_name',
    'database_name': 'database_name',
    'schema_name': 'schema_name',
    'object_name': 'object_name',
    'statement': 'statement'
}, inplace=True)

# Save the filtered DataFrame to a CSV file (optional)
filtered_df.to_csv('filtered_log_data.csv', index=False)








# # Print the first 10 records
# print(log_df.head(10))

# Group by UserName
# grouped_df = filtered_df.groupby('UserName')

# Save the filtered DataFrame to a CSV file (optional)
# filtered_df.to_csv('filtered_log_data.csv', index=False)

# # Optionally, save each group to a separate CSV file
# for name, group in grouped_df:
#     group.to_csv('grouped_log_data.csv', index=False)

# Print total record count
# total_records = len(filtered_df)
# print(f"Total Records: {total_records}")

# for name, group in grouped_df:
#     print(f"UserName: {name}, Total Records: {len(group)}")

# # Group by action_id
# grouped_df = filtered_df.groupby('action_id')

# # Print the total record count for each action_id
# for name, group in grouped_df:
#     print(f"action_id: {name}, Total Records: {len(group)}")