name = input("Enter your name: ")
age = int(input("Enter your age: "))
height = float(input("Enter your height: "))

print(type(name))

age += 1
height += 1
print()

print("Hello! " + name)
print("your increased age is: " + str(age))
print("your increased height is: " + str(height))