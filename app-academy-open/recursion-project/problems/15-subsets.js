/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
/*
[1, 2, 3] ==> 
output = []
 > Compute the subsets:
    a. First round ==> [[]]
    b. Second round ==> [[], [1]] {Adding 1 to []}
    c. Third round ==> [[2], [1, 2]] {Adding 2 to [], and [1]}
    d. Fourth round ==> [[3], [1, 3], [2, 3], [1, 2, 3]] {Adding 3 to [], [1], [2], [1, 2]}
Building sets:
                                      []
                              /    /         \
                          [1]    [2]         [3]
                                  |          /     \
                               [1, 2]    [1, 3]   [2, 3]
                                                    |
                                                [1, 2, 3]


*/
function subsets(arr, sets = []) {
  if (arr.length >= 1) {
    let numTermsToAdd = arr.length - 1
    let newTerms = [];
    let num = arr[0];
    
    if (sets.length === 0) { sets.push([]) }

    sets.forEach((el, i) => {
      let term = [...el]
      term.push(num);
      newTerms.push(term);
  });

  sets = [...sets, ...newTerms];

  if (numTermsToAdd > 0) {
      let nextTerms = subsets(arr.slice(1), sets);
      sets = [...nextTerms];
      return sets
  } else {
      return sets;
  }

  } else {
    return [sets];
  }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
