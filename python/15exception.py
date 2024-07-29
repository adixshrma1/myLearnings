try:
    num1 = int(input('Enter Divident: '))
    num2 = int(input('Enter Divisor: '))
    ans = num1/num2
except ZeroDivisionError as e:
    print(e)
    print("You can't divide by zero")
except ValueError as e:
    print(e)
    print("Please enter a valid number")
except Exception as e:
    print(e)
    print('Something went wrong. :( ')
else:
    print("The result is :", ans)
finally:
    print('This will execute no matter what happened')
