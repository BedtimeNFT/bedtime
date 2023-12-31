import json

# Path to your directory containing the JSON files and the text file with image URLs
json_directory = 'e:/markc/bedtime/nft/jsontest'
image_urls_file = 'e:/markc/bedtime/nft/jsontest/newname.txt'

# Read all image URLs from the text file
with open(image_urls_file, 'r') as file:
    image_urls = file.readlines()

# Assuming JSON files are named sequentially like 'file1.json', 'file2.json', ...
for i in range(1, 1001):
    json_file_path = json_directory + f'file{i}.json'
    
    # Read the current JSON file
    with open(json_file_path, 'r') as json_file:
        data = json.load(json_file)
    
    # Update the 'image' tag with the new URL
    # Strip to remove any trailing newline character
    data['image'] = image_urls[i-1].strip()

    # Write the updated data back to the JSON file
    with open(json_file_path, 'w') as json_file:
        json.dump(data, json_file, indent=4)

print("All JSON files have been updated.")
