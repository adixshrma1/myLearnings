age = int(input("enter your age: "))
if age == 100:
    print("you are a century old!")
elif age == 0:
    print("you haven't event born yet!")
elif age >= 18:
    print("you are an adult!")
else:
    print("you are a child!")

# logical operators

temp = int(input("enter the temperature: "))
if temp >= 0 and temp <= 30:
    print("Good weather")
elif temp < 0 or temp > 30:
    print("bad weather, stay inside.")

print(not(True))