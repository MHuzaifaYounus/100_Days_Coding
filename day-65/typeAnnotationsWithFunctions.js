"use strict";
// Type Annotations With Functions 
function getSum(num1, num2) {
    return num1 + num2;
}
getSum(4, 5);
// optional parameter 
function getSum1(num1, num2, num3) {
    if (num3 !== undefined) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
}
getSum1(4, 5);
getSum1(4, 5, 8);
// default parameter
function getSum2(num1, num2 = 8) {
    return num1 + num2;
}
getSum2(2);
// rest parameter | spread operator(...)
function getSumAll(...nums) {
    return nums.reduce((a, b) => a + b);
}
getSumAll(4, 5, 6, 7, 7, 7, +true);
// arrow function 
let addWithArrow = (num1, num2) => num1 + num2;
console.log(addWithArrow(10, 20));
// anonymous functions
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20)); // Output: 30
// void 
function greet(name) {
    console.log(`Hello, ${name}!`);
}
// never
// never
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // This function never exits (infinite loop).
    }
}
