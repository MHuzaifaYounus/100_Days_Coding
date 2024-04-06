"use strict";
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
// Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.
let grades = [599, 478, 382, 472, 37];
let sum = grades.reduce((a, b) => a + b, 0);
let average = sum / grades.length;
console.log(average);
