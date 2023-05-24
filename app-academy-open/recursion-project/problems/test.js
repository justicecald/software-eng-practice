function advancedExponent(b, n) {
    // your code here
    // Base exponent function
    function exponent(b, n) {
      if (n > 0) { // Dealing with positive exponents
          if (n === 1) {
              return b;
          } else {
              return b * exponent(b, n - 1);
          }
      } else if (n < 0) { // Dealing with negative exponents
          if (n === -1) {
              return 1 / b;
          } else {
              return (1 / b) * exponent(b, n + 1);
          }
      } else { // The remaining option is 0
          return 1;
      }
    }
  
    // Adding advanced exponent functionality
    if (n % 2 === 0) {
        if (b === 2 && n > 0) {
            return exponent(b, n / 2) * exponent(b, n / 2);
        } else if (b % 2 === 0 && n > 0) {
            return exponent(2, n / 2) * exponent(b / 2, n / 2);
        } else {
            return 1;
        }
    } else {
      return b * exponent(b, (n - 1) / 2) * exponent(b, (n - 1) / 2);
    }
  }

debugger
// console.log(advancedExponent(2, 0)); // 1
// console.log(advancedExponent(2, 1)); // 2
// console.log(advancedExponent(2, 2)); // 4
// console.log(advancedExponent(2, 3)); // 8
// console.log(advancedExponent(2, 4)); // 16
// console.log(advancedExponent(2, 5)); // 32
// console.log(advancedExponent(2, 6)); // 64
// console.log(advancedExponent(2, 7)); // 128
// console.log(advancedExponent(2, 8)); // 256
// console.log(advancedExponent(2, 10)); // 1024
// console.log(advancedExponent(2, 11)); // 2048
// console.log(advancedExponent(2, 12)); // 4096
// console.log(advancedExponent(2, 100000))