"use strict";
// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
let num = 5;
// Declarations Function  
function getSquare() {
    return num ** 2;
}
// Expressions Function 
let getSquare2 = function () { return num ** 2; };
// console for Declarations Function
console.log(getSquare());
// console for Expressions Function
console.log(getSquare2());
