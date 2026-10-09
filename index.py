import sys

i = 1
for i in range(6):
    for j in range(i):
        print("*", end="")
    print(" ")
    
print(sys.version)    

