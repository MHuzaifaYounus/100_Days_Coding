"use strict";
// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    // for let keyword
    let user = "Ahmed";
    console.log(`${user}`);
}
{
    // for const keyword
    const admin = "Huzaifa";
    console.log(`${admin}`);
}
// checking for let keyword 
try {
    console.log(user);
}
catch (error) {
    console.log(`Error: user is not accessible here`);
}
// checking for const keyword 
try {
    console.log(admin);
}
catch (error) {
    console.log(`Error: admin is not accessible here`);
}
