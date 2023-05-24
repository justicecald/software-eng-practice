/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
function isSorted(array) {
  let length = array.length;
  let num1 = array[0];
  let num2 = array[1];

  if (length <= 2) {
    return num2 > num1;
  } else if (num2 < num1) {
      return false
  } else {
      return isSorted(array.slice(1));
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
