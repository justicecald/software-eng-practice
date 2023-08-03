# Algorithm for generating the first n fibonacci numbers
'''
The principal for this application is to use the module to generate the first n fibonacci numbers
'''
from __future__ import annotations

def n_fibonacci(n: int, arr: list[int]) -> list[int]:
    '''
    Implementing a recursive solution, we have the base cases for n=0 and n=1
    
    The recursive cases would be for n > 1
    '''
    # Base cases:
    if n == 0:
        return arr
    elif n == 1:
        arr.append(1)
        return arr
    elif n == 2:
        arr = arr + [1, 1]
        return arr

    # Recursive cases
    else:
        prev_fib_nums = n_fibonacci(n-1, arr)
        new_fib_num = prev_fib_nums[-1] + prev_fib_nums[-2]

        arr = prev_fib_nums + [new_fib_num]

    return arr