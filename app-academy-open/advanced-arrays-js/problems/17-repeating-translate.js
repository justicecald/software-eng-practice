/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

let repeatingTranslate = function(sentence) {
    // Your code here

    let words = sentence.split(" ");

    let hipster = words.map(translateWord);

    return hipster.join(" ");
};


let translateWord = function(word) {
    // Your code here
    let vowels = ['a','e','i','o','u'];

    if (word.length >= 3) {
        let chars = word.split("");
        let test = chars[chars.length - 1];

        if (vowels.indexOf(test) > -1) {
            let newWord = word.concat(word);
            return newWord;

        } else {
            let i = chars.length - 2;
            let found = false;

            while(!found) {
                if (vowels.indexOf(chars[i]) > -1) {
                    found = true;
                }
                i--;
            }

            let ending = word.slice(i + 1);
            let newWord = word.concat(ending);
            return newWord;
        }

    } else {
        return word;
    }
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}
