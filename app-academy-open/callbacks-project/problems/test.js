let mySome = function(array, cb) {
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        if (cb(el, i)) {
            return true;
        } else {
            return false;
        }
    }
};

debugger
let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true