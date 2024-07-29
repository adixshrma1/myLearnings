import random

x = random.randint(1, 10)   # it will include  both the numbers from 1 to 10
print(x)

y = random.random()         # it will chose a num between 0 and 1.
print(y)

myList = ['rock', 'paper', 'scissors']
z = random.choice(myList)    # It will randomly choose an item from the list
print(z)

cards = [1,2,3,4,5,6,7,8,9,10,'J', 'Q', 'K']
random.shuffle(cards)
print(cards)