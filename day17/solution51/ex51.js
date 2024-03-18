// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.
function calc_area(height, width) {
    return height * width;
}
var calculate_area = function (height, width) { return height * width; };
console.log(calculate_area(4, 5));
