"use strict";
// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, you enclose them in parentheses.
let getProductAll = (...numbers) => numbers.reduce((a, b) => (a * b), 1);
console.log(getProductAll(6, 3, 5, 5, 5));
