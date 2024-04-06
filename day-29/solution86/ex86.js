"use strict";
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
function checkword(string) {
    let word = "JavaScript";
    return string.includes(word);
}
console.log(checkword("JavaScript is the best Programming language"));
