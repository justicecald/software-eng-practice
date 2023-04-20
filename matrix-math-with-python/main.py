'''
Author: Justice M. Calderón
Date: April 7th, 2023

Project title: Custom matrix library using Python3

main.py - Python package that holds primary functions for interacting with the Matrix class.

'''
from matrix import Matrix # See matrix.py
from functools import wraps
import contextlib

@contextlib.contextmanager
def readFile(filename, mode):
  '''
  Reading in the matrix data from input TXT.
  '''
  myfile = open(filename, mode)

  yield myfile

  myfile.close()

def read_matrix(filename):
  '''
  read_matrix() ingests the data from the TXT file and constructs a matrix array.
  '''
  matrix = []
  with readFile(filename, 'r') as input_data:
      for row in input_data:
          matrix.append([int(char) for char in row.split()]) # Generating rows of input matrix object
  return matrix

def coroutine(func):
  '''
  coroutine() is a primer function for input generator objects.
  '''
  @wraps(func)
  def primer(*args, **kwargs):
    generator = func(*args, **kwargs)
    next(generator)
    return generator
  return primer

@coroutine
def add_series():
  '''
  add_series() is a function that leverages generator objects to sum matrix objects in series.
  '''
  result = None
  while True:
    new_term = yield result
    if result is None:
        result = new_term
        result.print()
        
    else:
        try:
            result = result + new_term
            result.print()
        except:
            result = yield None
            print('Addition not possible!')

# Multiplying matrices in series
@coroutine
def multiply_series():
  '''
  multiply_series() is a function that leverages generator objects to multiply matrix objects in series.
  '''
  result = None
  while True:
    new_term = yield
    if result is None:
        print('here')
        result = new_term
        result.print()
        
    else:
        try:
            result = result * new_term
            result.print()
        except:
            result = yield None
            print('Multiplication not possible!')

def switch():
  '''
  switch() is a generator object that takes an input matrix, and squares it to be included in
  the running sum function, switch_add_multiply().
  '''
  value = yield
  try:
    result = value * value
    return result
  except:
    print('Order not correct')

# Multiplying matrices and adding in series
@coroutine
def switch_add_multiply():
  '''
  switch_add_multiply() uses the switch() generator function and sums the squares of matrix objects.
  '''
  matrix_switch_sum = None
  while True:
    term = yield from switch()
    if matrix_switch_sum is None or term is None:
      matrix_switch_sum = term
      matrix_switch_sum.print()
    else:
      try:
        matrix_switch_sum += term
        matrix_switch_sum.print()
      except:
        print('Order not correct')

# Multiplying matrices with scalar in series
@coroutine
def intensify_magnitude(matrix):
  '''
  intensify_magnitude() will perform multiplication between scalar values and Matrices.
  '''
  while True:
    scalar = yield
    if scalar is not None:
      result_matrix = []
      for row in matrix.matrix:
        result_matrix.append([scalar * element for element in row])
      result_matrix = Matrix(result_matrix)
      result_matrix.print()
    else:
      print('Multiplication is not possible')

'''
Test code
'''
test_routine = intensify_magnitude(Matrix([[2, 4], [6, 8]]))

test_routine.send(2)
test_routine.send(3)
