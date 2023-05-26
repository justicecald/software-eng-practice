/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
function flatten(array) {
    let isArray = typeof array === "object";
  
    if (isArray) {
        if (array.length > 0) {
            let element = array[0];
            let length = array.length;
  
            if (typeof element === "object") {
                let next = flatten(element);
                if (length >= 2) {
                    let restOfArray = array.splice(1);
                    return next.concat(flatten(...restOfArray))
                } else {
                    return next
                }
            } else {
                if (length >= 2) {
                    let restOfArray = array.splice(1);
                    return [element].concat(flatten(...restOfArray));
                } else {
                    return [element];
                }
            }



        } else {
            return [];
        }
    } else {
        return array;
    }
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
