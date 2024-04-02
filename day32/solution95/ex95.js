"use strict";
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
let numbers = [10, 43, 6, 37, 7, 54, 7, 8, 43, 5, 4, 5, 44, 12, 4, 5, 6, 8, 897, 54, 4];
function getGreterThan10(nums) {
    return nums.filter((n) => n > 10);
}
console.log(getGreterThan10(numbers));
