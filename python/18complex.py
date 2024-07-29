class ComplexNumber:
    def __init__(self, real, imag):
        self.real = real
        self.imag = imag
    
    def __add__cko(self, other):
        return ComplexNumber(self.real + other.real, self.imag + other.imag)

    def __str__(self):
        if self.imag >= 0:
            return f"{self.real} + {self.imag}i"
        else:
            return f"{self.real} - {-self.imag}i"

c1 = ComplexNumber(4, -8)
c2 = ComplexNumber(2, -5)

result = c1 + c2
print(result)