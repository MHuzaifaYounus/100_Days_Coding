"use strict";
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
function getSum(...nums) {
    return nums.reduce((sum, number) => sum + number);
}
console.log('The Sum is', getSum(1, 2, 3, 5, 6, 6, 4, 5));
