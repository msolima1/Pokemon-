from numba import jit
import time


# Function to count to 10 million with JIT
@jit(nopython=True)
def count_to_ten_million_jit():
    count = 0
    for i in range(1, 10000001):
        count += 1
        print(i)
    return count


# Timing with JIT
start = time.time()
count_to_ten_million_jit()
end = time.time()
print("With JIT:", end - start, "seconds")
