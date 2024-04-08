"use strict";
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.
let studentsData = new Map([
    [1452, "Huzaifa"],
    [4823, "Amna"],
    [4859, "Areeb"],
    [4753, "Anus"],
    [4578, "Areeb"],
]);
studentsData.forEach((name, id) => {
    console.log(`ID:- ${id} : Name:- ${name}`);
});
