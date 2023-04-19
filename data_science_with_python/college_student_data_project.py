'''
Author: Justice M. Calderón
Date: April 4th, 2023

Project title: Gathering insights on college student behaviors

'''

import csv 
from collections import namedtuple, defaultdict, Counter

# Importing data from kaggle
with open('food_coded.csv', newline='') as f:
    reader = csv.reader(f)
    data = list(reader)     # contains the data in raw format
#print(data)

# Columns you'll deal with in this project
required_columns = ['GPA', 'Gender', 'drink', 'exercise', 'fries', 'income', 'sports', 'weight']

def group_values_with_columns(orig_data, req_col, **kwargs):
    '''
    The group_values_with_columns() function performs grouping of data points within the input CSV file
    and the columns of interest defined above in the variable, required_columns.

    '''
    # Defining namedtuple to store (a) the column name and (b) the first n responses
    Student = namedtuple('Student', req_col)

    grouped_data = [] # Initializing grouped_data

    if kwargs:
        max_responses = int(kwargs['n'])
    else:
        max_responses = 50  # Setting the default value for number of resopnses to store

    # Storing student responses in the respective columns
    response_count = 0
    
    for column in req_col:
        for line in orig_data[1:]:
            response_count += 1
            
            if response_count <= max_responses:
                
                # Matching responses to column
                column_idx = [orig_data[0].index(col) for col in req_col]
                response = [line[answer] for answer in column_idx]

                # Make a namedtuple from the iterable 'response' and append to grouped_data
                grouped_data.append(Student._make(response))
            else:
                break
    return grouped_data

def count(func):
    '''
    The count() function is a decorator function for returning the count of students of the input array.
    '''
    def wrapper(*args):
        list_of_students = func(*args)
        num_of_students = len(list_of_students)
        return num_of_students
    
    return wrapper

# Getting males from the data
@count
def get_females(data):
    '''
    The get_females() function returns a list with students that stated their gender as female.
    '''
    females = [student for student in data if student.Gender == '1']
    return females


# Getting femlaes from the data
@count
def get_males(data):
    '''
    The get_males() function returns a list with students that stated their gender as male.
    '''
    required_columns
    males = [student for student in data if student.Gender == '2']
    return males


def drink_stats(data):
    '''
    The drink_stats() function will returns a dictionary with drink options as keys and
    the number of students that chose the corresponding drink in the survey.
    '''

    drink_dict = defaultdict(list)
    for key in [student.drink for student in data]:
        count = len([drink_response for drink_response in data if drink_response.drink == key])
        drink_dict[key] = count
        
    return drink_dict

# Getting exercise stats
def exercise_stats(data, x):
    '''
    The exercise_stats() function will return the number or students with the desired, response (x)
    to the exercise prompt in the survey.
    '''

    exercise_data = [student for student in data if student.exercise == x]
    print(len(exercise_data))
    return get_males(exercise_data), get_females(exercise_data)

def weight_stats(data, x):
    '''
    The weight_stats() function will return:
    (1) The x most common weights for females
    (2) The x least common weights for males
    '''

    male_dict = defaultdict(list)
    female_dict = defaultdict(list)
    
    for student in [sample for sample in data if sample.weight.isnumeric()]:
        student_weight = student.weight
        female_dict[student_weight] = get_females((lambda x: [sample for sample in x if sample.weight == student_weight])(data))
        male_dict[student_weight] = get_males((lambda x: [sample for sample in x if sample.weight == student_weight])(data))

    female_weight_count = sum([stat[1] for stat in Counter(female_dict).most_common(x)])
    male_weight_count = sum([stat[1] for stat in Counter(male_dict).most_common()[:-x-1:-1]])

    return female_weight_count, male_weight_count


def gpa_cleaner(func):
    '''
    The gpa_cleaner() function removes students who did not submit a valid response to the GPA
    survey question.
    '''
    def wrapper(*args):
      def isfloat(input): # Creating a custom function to test whether a string is a float number or not.
          try:
              float(input)
              return True
          except ValueError:
              return False
          
      dirty_data = func(*args)
      partially_cleaned = (lambda x: [student for student in x if isfloat(student.GPA)])(dirty_data)
      return partially_cleaned
    return wrapper


def gender_cleaner(func):
    '''
    The gender_cleaner() function removes students who did not submit a valid response to the gender
    survey question.
    '''
    def wrapper(*args):
        dirty_data = func(*args)
        partially_cleaned = (lambda x: [student for student in x if student.Gender.isnumeric()])(dirty_data)
        return partially_cleaned
    return wrapper


def drink_cleaner(func):
    '''
    The drink_cleaner() function removes students who did not submit a valid response to the drink
    survey question.
    '''
    def wrapper(*args):
        dirty_data = func(*args)
        partially_cleaned = (lambda x: [student for student in x if student.drink.isnumeric()])(dirty_data)
        return partially_cleaned
    return wrapper


def exercise_cleaner(func):
    '''
    The exercise_cleaner() function removes students who did not submit a valid response to the exercise
    survey question.
    '''
    def wrapper(*args):
        dirty_data = func(*args)
        partially_cleaned = (lambda x: [student for student in x if student.exercise.isnumeric()])(dirty_data)
        return partially_cleaned
    return wrapper


def fries_cleaner(func):
    '''
    The fries_cleaner() function removes students who did not submit a valid response to the fries
    survey question.
    '''
    def wrapper(*args):
        dirty_data = func(*args)
        partially_cleaned = (lambda x: [student for student in x if student.fries.isnumeric()])(dirty_data)
        return partially_cleaned
    return wrapper


def income_cleaner(func):
    '''
    The income_cleaner() function removes students who did not submit a valid response to the income
    survey question.
    '''
    def wrapper(*args):
        dirty_data = func(*args)
        partially_cleaned = (lambda x: [student for student in x if student.income.isnumeric()])(dirty_data)
        return partially_cleaned
    return wrapper


def sports_cleaner(func):
    '''
    The sports_cleaner() function removes students who did not submit a valid response to the sports
    survey question.
    '''
    def wrapper(*args):
        dirty_data = func(*args)
        partially_cleaned = (lambda x: [student for student in x if student.sports.isnumeric()])(dirty_data)
        return partially_cleaned
    return wrapper

def weight_cleaner(func):
    '''
    The weight_cleaner() function removes students who did not submit a valid response to the weight
    survey question.
    '''
    def wrapper(*args):
        dirty_data = func(*args)
        partially_cleaned = (lambda x: [student for student in x if student.weight.isnumeric()])(dirty_data)
        return partially_cleaned
    return wrapper

@gpa_cleaner
@gender_cleaner
@drink_cleaner
@exercise_cleaner
@fries_cleaner
@income_cleaner
@sports_cleaner
@weight_cleaner
def clean_data(data):
    '''
    The clean_data() function will pull together all of the decorator functions and remove all students
    who did not provide a valid response to the questions of interest.
    '''
    cleaned_data = data
    return cleaned_data


'''
Test code below
'''
Mcdonalds_fries = count((lambda x: [student for student in x if student.fries == '1']))
income_check = count((lambda x: [student for student in x if student.income in ['4', '5', '6']]))
bright_students = count((lambda x: [student for student in x if float(student.GPA) > 3.0 if student.income in ['5', '6'] ]))

test = group_values_with_columns(data, required_columns, n=125)
cleaned_data = clean_data(test)

print(len(test) - len(cleaned_data))
