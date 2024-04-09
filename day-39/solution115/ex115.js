"use strict";
// Question 115: Use a switch statement to log the days of the week based on a number (1-7).
// Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. It's particularly useful for scenarios like mapping numbers to days of the week.
function checkDay(day) {
    switch (day) {
        case 1:
            console.log(`Today is Monday`);
            break;
        case 2:
            console.log(`Today is Tuesday`);
            break;
        case 3:
            console.log(`Today is Wednesday`);
            break;
        case 4:
            console.log(`Today is Thursday`);
            break;
        case 5:
            console.log(`Today is Friday`);
            break;
        case 6:
            console.log(`Today is saturday`);
            break;
        case 7:
            console.log(`Today is sunday`);
            break;
        default:
            console.log(`Enter the valid Day`);
            break;
    }
}
checkDay(2);
