"use strict";
// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
function getindex(string) {
    let scaningWord = "code";
    let output = string.indexOf(scaningWord);
    if (output == -1) {
        return `The input string does not contain word "${scaningWord}" `;
    }
    else {
        return output;
    }
}
console.log(getindex("hi this is the code of typescript"));
console.log(getindex("hi this is typescript"));
