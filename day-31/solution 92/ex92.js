"use strict";
// Question 92: Write a function to remove the last element from an array and return the removed element.
function getLastElement(arr) {
    return arr.pop();
}
let list = [1, 4, 5, 6, 4, 14];
console.log(getLastElement(list));
