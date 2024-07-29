name = "aditya"
str = "56"
str2 = "aasdklf889899"

# print(len(name))
# print(name.find("a"))
# print(name.capitalize())
# print(name.upper())
# print(name.lower())
# print()

# print(name.isdigit())
# print(str.isdigit())
# print(str2.isdigit())
# print()

# print(name.isalpha())
# print(str.isalpha())
# print(str2.isalpha())
# print()

# print(name.count("a"))
# print(name.replace("a", "o"))
# print(name*3)     # string replication0

# str.format() method

animal = 'cow'
item = 'moon'
text = 'The {} jumped over {}'

# print("The {} jumped over the {}".format(animal, item))
# print("The {1} jumped over the {0}".format(animal, item))
# print(text.format(animal, item))

# adding padding to  a string using format()
# print("Hi, how are you? {:10} friend".format(animal))
# print("Hi, how are you? {:>10} friend".format(animal))
# print("Hi, how are you? {:^10} friend".format(animal))

# format() method on numbers
# pi = 3.1415926535
# num = 1000
# print("The value of pi is {:.2f}".format(pi))
# print("The number is {:,}".format(num))
# print("The number is {:b}".format(num))     # binary
# print("The number is {:o}".format(num))     # octal
# print("The number is {:X}".format(num))     # hexadecimal uppercase
# print("The number is {:x}".format(num))     # hexadecimal lowercase
# print("The number is {:E}".format(num))     # scientific notation