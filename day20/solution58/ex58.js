"use strict";
// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!
function calc_averg(...scores) {
    let average = scores.reduce((a, b) => a + b) / scores.length;
    console.log(average);
}
calc_averg(89, 73, 66, 79, 99);
