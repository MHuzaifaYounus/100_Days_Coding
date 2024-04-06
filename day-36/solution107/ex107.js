"use strict";
// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDivisibleBY2_3(number) {
    if (number % 6 === 0) {
        console.log(`${number} is divisible by both 2 and 3`);
    }
    else {
        console.log(`${number} is not divisible by both 2 and 3`);
    }
}
isDivisibleBY2_3(12);
