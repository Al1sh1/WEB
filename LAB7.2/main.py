from models import Animal, Dog, Cat

def main():
    
    animal = Animal("GenericAnimal", 5, "Gray")
    dog = Dog("Buddy", 3, "Brown", "Labrador")
    cat = Cat("Whiskers", 2, "White", True)

    animals = [animal, dog, cat]

    for a in animals:
        print(a)             
        print(a.eat())        
        print(a.speak())      
        print("-" * 30)

    print(dog.fetch())
    print(cat.scratch())


if __name__ == "__main__":
    main()