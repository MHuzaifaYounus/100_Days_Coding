"use strict";
// Question 133: Write a JavaScript object and convert it into a JSON string.
// Explain & TIP: JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for humans to read and write and for machines to parse and generate. Converting a JavaScript object into a JSON string can be done using JSON.stringify().
let User1 = {
    name: 'Huzaifa',
    age: 16,
    Passion: "Generative AI"
};
console.log(JSON.stringify(User1));
