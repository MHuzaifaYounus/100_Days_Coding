"use strict";
// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
// let keyword on global scope 
let index = 40;
function getnumbers() {
    // print Numbers from 1-5
    // index is 1
    for (let index = 1; index <= 5; index++) {
        console.log(index);
    }
}
console.log(index); //it uses the global scope variable
getnumbers(); //it uses the in loop variable
