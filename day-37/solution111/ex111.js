"use strict";
// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function getAgeGroup(age) {
    if (age < 13) {
        console.log(`You are a Child`);
    }
    else if (age >= 13 && age <= 19) {
        console.log(`You are a Teenager`);
    }
    else if (age >= 20) {
        console.log(`You are an Adult`);
    }
}
getAgeGroup(16);
