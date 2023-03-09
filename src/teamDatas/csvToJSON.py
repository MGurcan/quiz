import csv
import json

# import OS module
import os
 
# Get the list of all files and directories
path = "./PremierLeagueCSV"
dir_list = os.listdir(path)
 
print("Files and directories in '", path, "' :")
 
# prints all files


for file in dir_list:
    print(file[:-4])
    teamName = file[:-4]

    with open(f'{path}/{teamName}.csv', 'r') as csvfile:
        # Create a CSV reader object
        reader = csv.DictReader(csvfile)
        # Convert the CSV data into a list of dictionaries
        data = [dict(row) for row in reader]

    # Open a new file for writing
    with open(f'PremierLeague/{teamName}.js', 'w') as jsonfile:
        # Write the JSON data to the file
        jsonfile.write(f'export const {teamName} = [\n')
        for row in data:
            jsonfile.write('  ')
            json.dump(row, jsonfile)
            jsonfile.write(',\n')
        jsonfile.write(']')
    # Print a confirmation message
    print(f'Data written to output.json -> {teamName}')
