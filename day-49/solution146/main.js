"use strict";
// Question 146: Show an example of a callback function used to filter an array of numbers.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function. This method is commonly used to search through an array and create a subset of it based on certain criteria.
let numbers = [1, 3, 5, 65, 54, 6, 56, 6, 5, 654, 3, 54, 34, 54, 5];
console.log(numbers.filter((number) => number > 6));
