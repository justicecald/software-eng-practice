/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    // Your code here
    let vowels = ['a','e','i','o','u'];
    let chars = word.split("");

    let lastVowel = true;

    let i = chars.length - 1;
    while (lastVowel) {
        if (vowels.indexOf(chars[i]) != -1) {
            chars[i] = "";
            lastVowel = false;
        }
        i--;
    }

    let output = chars.join("");
    return output;
};

let hipsterfy = function(sentence) {
    // Your code here

    let words = sentence.split(" ");

    let newWords = words.map(function (word) {
        return removeLastVowel(word);
    });

    let output = newWords.join(" ");

    return output;
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
