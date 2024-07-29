# tuples: it is a collection which is ordered and unchangable

# student = (1, 'John', 'John', 25)
# print(type(student))
# print(student[3])
# print(student.index(25))
# print(student.index("John"))

# for i in student:
#     print(i)

# if "John" in student:
#     print("John is present here.")


# sets: it is a collection which is unordered and unindexed, no duplicate values

dishes1 = {'pasta', 'rice', 'chhole', 'roti', 'aaloo naan'}
dishes2 = {'daal makhni', 'raajma', 'matar paneer', 'roti'}

# dishes1.add('palak paneer')
# dishes1.remove('pasta')
# dishes1.pop()       # removes a random element
# dishes1.update(dishes2)   # adds all elements of the second set to first one
# all_dishes = dishes1.union(dishes2)
# print(all_dishes)

# print(dishes1.difference(dishes2))      # returns items that are only in dishes1 not in dishes2
# print(dishes1.intersection(dishes2))

# dishes1.clear()

print(dishes1)

# for i in dishes1:
#     print(i)