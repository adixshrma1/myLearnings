# function is a block of code that executes only when its called.

# def greet(name, age):
#     print("Hello, "+name)
#     print("you are " + str(age) + " years old")

# greet("Aditya", 22)


# def multiply(num1, num2):
#     return num1 * num2

# result = multiply(4,7)
# print(result)

# keyword arguments: arguments proceeded by an identifier passed inside a function
#                    due to which order doesn't matter unlike positional args
#                    python identifies the argument that function receives

def hello(first, middle, last):
    print("Hello, " + first + " " + middle + " " + last)

hello("Chand", "Kaushik", "Mahesh")     # without keyword args

hello(middle="Chand",last="Kaushik", first="Mahesh")   # with keyword args