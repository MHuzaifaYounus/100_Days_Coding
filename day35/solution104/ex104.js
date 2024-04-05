"use strict";
// Question 104: Create a function that generates a random hexadecimal color code.
// Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can generate each digit randomly and concatenate them into a full color code.
function getColor() {
    let digits = "abcdef1234567890";
    let digitsArr = digits.split("");
    let colorCode = "#";
    for (let index = 0; index < 6; index++) {
        let randomIndex = Math.floor(Math.random() * 16);
        colorCode = colorCode + digitsArr[randomIndex];
    }
    return colorCode;
}
console.log(getColor());
