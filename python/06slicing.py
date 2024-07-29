# slicing: creating a substring by extracting elements from another string.
#           indexing[] or slice()
#           [start:end:step]

name = "Aditya Sharma"
first_name = name[:6]   # similar to [0:6]
last_name = name[7:]    # similar to [7:len(string)]
funky_name = name[::2]  # take every second character
reverse_name = name[::-1]

print(first_name)
print(last_name)
print(funky_name)
print(reverse_name)

website1 = "https://www.google.com"
website2 = "https://www.wikipedia.com"
website3 = "www.pornhub.com"

print(website2[slice(12, -4)])
print(website1[slice(12, -4)])
print(website3[slice(4, -4)])