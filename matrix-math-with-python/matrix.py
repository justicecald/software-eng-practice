'''
Author: Justice M. Calderón
Date: April 7th, 2023

Project title: Custom matrix library using Python3

matrix.py - Holdes definition of Matrix class, methods, and attributes.

'''

class Matrix:

    def __init__(self, matrix):
        '''
        Instantiating matrix object.
        '''
        self.matrix = matrix

    def print(self):
        '''
        Overloading print() function for matrix object.
        '''
        print(self.matrix)

    # Adding matrices
    def __add__(self, other):
        '''
        Overloading __add__() Dunder method for matrix addition.
        '''
        try:
            if len(self.matrix) == len(other.matrix) and len(self.matrix[0]) == len(other.matrix[0]):
                result_matrix = []
                for row_A, row_B in zip(self.matrix, other.matrix):
                    row_C = [sum(pair) for pair in zip(row_A, row_B)]
                    result_matrix.append(row_C)
                return Matrix(result_matrix)
        except:
            raise ValueError('Addition error - not a matrix or dimension mismatch')
    
    def __mul__(self, other):
        '''
        Overloading __mul__() Dunder method for matrix multiplication.
        '''
        try:
            if isinstance(other, Matrix):
                # Condition for if elements are instances of Matrix class
                if not isinstance(other.matrix, (int, float)):
                    rows_m1 = len(self.matrix)
                    cols_m1 = len(self.matrix[0])
                    rows_m2 = len(other.matrix)
                    cols_m2 = len(other.matrix[0])

                    # Base matrix multiplication operation
                    if cols_m1 == rows_m2:
                        result_matrix = []
                        for row1 in range(rows_m1):
                            result_matrix.append([])
                            for col2 in range(cols_m2):
                                new_matrix_element = sum([i * j for i, j in zip(self.matrix[row1], [k[col2] for k in other.matrix])])
                                result_matrix[row1].append(new_matrix_element)
                        return Matrix(result_matrix)
                    else:
                        raise ValueError('Dimensions do not match')
        except:
            raise ValueError('Cannot complete the multiplication')
                  
    def __rmul__(self, other):
        '''
        Overloading __rmul__() for reflective multiplication if order is not correct.
        '''
        return self * other