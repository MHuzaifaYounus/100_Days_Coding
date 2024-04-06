"use strict";
// Question 103: Write a function that returns a random boolean value, true or false.
function getDecision() {
    let chances = Math.random();
    if (chances <= 0.5) {
        return true;
    }
    else {
        return false;
    }
}
console.log(getDecision());
