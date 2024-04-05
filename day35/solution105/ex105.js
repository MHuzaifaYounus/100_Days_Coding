"use strict";
// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
function rollDice() {
    let result = Math.floor(Math.random() * 6 + 1);
    return result;
}
console.log(rollDice());
