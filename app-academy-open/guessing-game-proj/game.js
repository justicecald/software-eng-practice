// Here is the JavaScript code for building a small guessing game using Node's readline module

// Importing the readline module.
const readline = require("node:readline");
const { stdin: input, stdout: output } = require('node:process');

// Creating a readline interface with the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Defining functions for the game
function randomInRange(min, max) {
    let factor = Math.random();
    let range = max - min;
    let inter = Math.floor(factor * range);
    return min + inter;
}

function checkGuess(num, secretNumber) {
    if (num < secretNumber) {
        console.log("Too low...");
        return false;
    } else if (num > secretNumber) {
        console.log("Too high...");
        return false;
    } else {
        console.log("Correct!");
        return true;
    }
}

function askGuess(secretNumber) {
    rl.question("Enter your guess: ", (answer) => {
        let guessIn = Number(answer);
        if (checkGuess(guessIn, secretNumber)) {
            console.log("You win!!");
            rl.close();
        } else {
            askGuess(secretNumber);
        };
    });
}

function askRangeMax(min) {
    rl.question("Enter max: ", (answer) => {
        let max = Number(answer);
        console.log(`I'm thinking of a number between ${min} and ${max}...`);
        let secretNumber = randomInRange(min, max);
        askGuess(secretNumber);
    });
}

function askRange() {
    rl.question("Enter min: ", (answer) => {
        let min = Number(answer);
        askRangeMax(min);
    });
}

askRange()