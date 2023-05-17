function snakeToCamel(str) {
    // Your code here
    let words  = str.split('_'); // Generating array of words from input string

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

console.log(snakeToCamel('snakes_go_hiss'))