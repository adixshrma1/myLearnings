class Car:
    def __init__(self, model, year, color):
        self.model = model
        self.year = year
        self.color = color
    
    def drive(self):
        print("You are driving a " + self.model)
    
    def stop(self):
        print(self.model + " is stopped....")


car_1 = Car("Maruti", 2012, "white")
car_2 = Car("Mustang", 2022, "black")
car_1.drive()
car_1.stop()
print()

car_2.drive()