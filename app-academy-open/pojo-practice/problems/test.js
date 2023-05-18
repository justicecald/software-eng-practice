function appleCounter(appleObj) {
    // Your code here
    let count = 0;
  
    Object.keys(appleObj).forEach((key) => {
        if (key.toLowerCase().includes("apple")) {
            count++;
        }
    });
  
    return count;
}

let obj3 = {
    crabApple: "yum!",
    honeyApple: "super yum",
    banana: "yay",
    bigapple: "NYC"
};

debugger
console.log(appleCounter(obj3)); // => 3