"use strict";
// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
// taking two variables 
let a = 1;
let b = 12;
// before swaping 
console.log(`Before swaping:- a: ${a}, b: ${b}`);
function swapValues() {
    // making a copy of a                          
    let copyOfa = a;
    // assigning value of "b" in  "a"
    a = b;
    // assigning value of  copied "a" in  "b"
    b = copyOfa;
}
// swaping value 
swapValues();
// after swaping 
console.log(`After swaping:- a: ${a}, b: ${b}`);
