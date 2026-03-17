import math

a = int(input())
b = int(input())

i = int(math.sqrt(a))

while i * i <= b:
    if i * i >= a:
        print(i * i, end=" ")
    i += 1