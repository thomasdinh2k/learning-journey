import requests
from bs4 import BeautifulSoup

r = requests.get("https://pythonizing.github.io/data/real-estate/rock-springs-wy/LCWYROCKSPRINGS/")
c = r.content

# print(c)

soup = BeautifulSoup(c, "html.parser")
# print(soup.prettify())

all = soup.find_all("div", {"class": "propertyRow"})
# print(len(all))

# If you want to change to ".text", then replace "Find_all" to "Find"
test = all[0].find("h4", {"class": "propPrice"}).text.replace("\n", "").replace(" ", "").replace("$", "đ")
# print(test)
# print(type(test))
# print(all)
# Test illeration
dictionary_list = []
for item in all:
    d = {

    d["Price"] = item.find("h4", {"class": "propPrice"}).text.replace("\n", "").replace(" ", "")

    d["Address"] = item.find_all("span", {"class": "propAddressCollapse"})[0].text, \
    item.find_all("span", {"class": "propAddressCollapse"})[1].text

    print("*** ", item.find_all("span", {"class": "propAddressCollapse"})[0].text,
          item.find_all("span", {"class": "propAddressCollapse"})[1].text, " *** ")
    print("Price: ", item.find("h4", {"class": "propPrice"}).text.replace("\n", "").replace(" ", ""))

    # print(item.find_all("span", {"class": "propAddressCollapse"})[1].text)

    # Insert a try-except statement to avoid "None" Type Value
    try:
        print("Beds: ", item.find("span", {"class": "infoBed"}).find(
            "b").text)  # Beds - Use "b" tag to look for a specific number only
        d["Beds"] = item.find("span", {"class": "infoBed"}).find("b").text

        print("Baths: ", item.find("span", {"class": "infoValueFullBath"}).find("b").text)  # Full Bath
        d["Bath"] = item.find("span", {"class": "infoValueFullBath"}).find("b").text

        print("Sqr: ", item.find("span", {"class": "infoSqFt"}).find("b").text)  # Sqt
        d["Sqr"] = item.find("span", {"class": "infoSqFt"}).find("b").text
    except:
        pass  # Pass to another data

    # What happend if the class attribute names are the same? We will need to loop to find the correct match
    for column_group in item.find_all("div", {"class": "columnGroup"}):
        # print(column_group)
        for feature_group, feature_name in zip(column_group.find_all("span", {"class": "featureGroup"}),
                                               column_group.find_all("span", {
                                                   "class": "featureName"})):  # zip function used to iterate 2 lists same time
            # print(feature_group.text, feature_name.text)
            if "Lot Size" in feature_group.text:
                if '0.21 Acres' in feature_name.text:
                    print(f'BINGOOOOOOOOOOOOOO {feature_name.text}')
                    d["Lot Size"] = feature_name.text
                else:
                    print(f'..Lots Size: {feature_name.text}..')
                    d["Lot Size"] = feature_name.text
    print("---" * 50)
    dictionary_list.append(d)
print("..." * 100)
print("Testing dictionary")

print(d)
print(dictionary_list)
print(len(dictionary_list))

import pandas
data_frame = pandas.DataFrame(dictionary_list)
print("Data Frame Loaded!")
print(data_frame)

data_frame.to_csv("/Users/thomas/Downloads/Output.csv")
print("Data Frame Export Completed!")

# Export Data from Multiple page
base_url = "https://pythonizing.github.io/data/real-estate/rock-springs-wy/LCWYROCKSPRINGS/t=0&s="

for page in range (10)