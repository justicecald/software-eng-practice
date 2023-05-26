function curriedSum(numArgs) {
  // Your code here
  let numbers = [];

  return subSum = (num) => {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach((el) => {
        sum += el;
      });
      return sum;
    } else {
      return subSum;
    }
  }
}

const sum = curriedSum(4); // returns a function
console.log(sum(5)) // returns a function
console.log(sum(20)) // returns a function
console.log(sum(30)) // returns a function
console.log(sum(20)); // => returns 75

// const sum2 = 
console.log(curriedSum(3)(2)(1)(7)); // => returns 10
