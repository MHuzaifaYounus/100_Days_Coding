"use strict";
// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
// Explain & TIP: In JavaScript, you can assign a value to a variable with = and later update it as needed. This is fundamental for keeping track of changing data within your programs.
function updateage() {
    // age in 2020 
    let age = 12;
    console.log(`Age in 2020: ${age}`);
    // updtaing age variable 
    age = 16;
    console.log(`Age in 2024: ${age}`);
}
updateage();
