function isFive(num) {
  // Your code here
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  // Your code here
  if (typeof number !== 'number') {
    throw new Error("Please enter a number")
  } else if (number % 2 === 0) {
    return false;
  } else if (number % 2 !== 0) {
    return true;
  }
}

function myRange(min, max, step = 1) {
  // Your code here
  let output = [];
  for (let i = min; i <= max; i += step) {
    output.push(i);
  }

  return output;
}


module.exports = { isFive, isOdd, myRange };