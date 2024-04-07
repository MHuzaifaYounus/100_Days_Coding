"use strict";
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function getGrade(score) {
    let grade;
    if (score >= 80) {
        grade = "A+";
        console.log(`Your Grade IS ${grade}, Keep It Up`);
    }
    else if (score < 80 && score >= 70) {
        grade = "A";
        console.log(`Your Grade IS ${grade}, Keep It Up`);
    }
    else if (score < 70 && score >= 60) {
        grade = "B";
        console.log(`Your Grade IS ${grade}, Keep It Up`);
    }
    else if (score < 60 && score >= 50) {
        grade = "C";
        console.log(`Your Grade IS ${grade}, Keep It Up`);
    }
    else if (score < 50 && score >= 40) {
        grade = "D";
        console.log(`Your Grade IS ${grade}, Keep It Up`);
    }
    else {
        grade = "F";
        console.log(`Your Are Failed`);
    }
}
getGrade(83.36);
