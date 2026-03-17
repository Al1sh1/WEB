class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def eat(self):
        return f"{self.name} is eating."

    def speak(self):
        return "Some generic animal sound"

    def __str__(self):
        return f"Animal(Name: {self.name}, Age: {self.age}, Color: {self.color})"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):  
        return f"{self.name} says Woof!"

    def fetch(self):
        return f"{self.name} is fetching a ball."

    def __str__(self):
        return f"Dog(Name: {self.name}, Breed: {self.breed})"


class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self):  
        return f"{self.name} says Meow!"

    def scratch(self):
        return f"{self.name} is scratching."

    def __str__(self):
        return f"Cat(Name: {self.name}, Indoor: {self.indoor})"