"use strict";
// Question 101: Generate a random integer between 1 and 10.
//Q101
function getRandomNum() {
    let randomNum = Math.floor(Math.random() * 10 + 1);
    return randomNum;
}
console.log(getRandomNum());
