"use strict";
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.
// Original Function 
function calc_area(height, width) {
    return height * width;
}
// Refactor function 
let calculate_area = (height, width) => height * width;
console.log(calculate_area(4, 5));
