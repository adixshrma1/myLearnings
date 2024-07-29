# dictionary: collection of key: value pairs
#              changeable, mutable, ordered (version 3.7) 
#              fast because they use hashing

capitals = {
    'Spain': 'Madrid',
    'India': 'New Delhi',
    'USA': 'Washington D.C',
}

# print(capitals.keys())
# print(capitals.values())
# print(capitals.items())

# print(capitals['Spain'])
# print(capitals.get('Spain'))
# # print(capitals['Germany'])        # this will give error if key is not present
# print(capitals.get('Germany'))      # this will return 'none' if element is not present

# capitals.update({'India': 'Mumbai'})
capitals.update({'China': 'Beijing'})
capitals.pop("China")
# capitals.clear()

print(capitals)

# for loop
for i in capitals.items():
    print(i)

for key, value in capitals.items():
    print(key, value)

