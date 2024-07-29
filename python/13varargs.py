# *args: parameter that will pack all arguments into tuple
#        tuples are ordered and unchangable.

# def sum(*args):
#     sum=0
#     for i in args:
#         sum = sum+i
#     return sum

# print(sum(1,2,3,6))


# **kwargs: parameter that will pack all argument into dictionary
#           dictionaries are ordered but changeable.
#           we can variable no of keyword arguments using this.

def person_info(**kwargs):
    # print(kwargs)       # print all info in form of dictionary.

    # print(kwargs['first'] + " " + kwargs['middle'] + " " + kwargs['last'])

    # for key, value in kwargs.items():
    #     print("%s == %s" %(key, value))

    # for i in kwargs.items():
    #     print(i)

    for key, value in kwargs.items():
        print(key, value)

person_info(first="Ramesh", middle="chandan", last="chutiya")


