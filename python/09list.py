# list: store different values in a single variable. (data types can be different)
#       duplicate values allowed.
#       ordered

food = ['pizza', 'pizza','sushi', 'burger', 'hot dog', 67, False]
# print(type(food))
print(food)
# print(food[3], food[5])

# for items in food:
#     print(items)


# list methods

food.append("chowmin")  # add
food.remove(67)   # delete
# food.remove(False)
# # food.sort()             # sort the elements of the list alphabetically (it will not work if str and int is together)
# food.reverse()    # reverse the order of elements
# food.pop()          # remove and return last element
# food.insert(2, "ramen")  # insert at specific position
# food.clear()

print(food)

# 2D list
# drinks = ['coffee', 'soda', 'water']
# snacks = ['chips', 'cookies' ,'candy']
# desserts = ['gaajar halwa', 'gulaab jamun',  'rasmalai']

# allFood = [drinks, snacks, desserts]
# print(allFood)
# print(allFood[2][2])