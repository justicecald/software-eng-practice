/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

*/

function snakeToCamel(str) {
    // Your code here
    let words  = str.split("_"); // Generating array of words from input string

    // Mapping input words to their camel case counterpart
    let newWords = words.map(function (word) {
        let chars = word.split("");

        // Generating new words based on PascalCase condition 
        let newChars = chars.map(function (char, i) {
            if (i == 0){
                return char.toUpperCase();
            } else {
                return char.toLowerCase();
            }
        });
        
        let outputWord = newChars.join("");
        return outputWord;
    });

    return newWords.join("");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = snakeToCamel;
} catch (e) {
    module.exports = null;
}
