# Algorithm for generating the first n fibonacci numbers
'''
The principal for this application is to use the module to generate the first n fibonacci numbers
'''
from __future__ import annotations
from flask import Flask, jsonify

app = Flask(__name__)

# Function for generating the n_fibonacci numbers recursively
def n_fibonacci(n: int, arr: list[int]) -> list[int]:
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

@app.route('/fibonacci/<int:num>', methods=['GET'])
def get_fibonacci_numbers(num: int):
    if num < 1:
        return jsonify(error='Please enter a positive integer.'), 400
    
    fib_numbers = n_fibonacci(num, [])
    return jsonify(fibonacci_numbers = fib_numbers)

if __name__ == '__main__':
    app.run()