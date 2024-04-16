"use strict";
// Question 135: Explain how you can format a JSON string with proper indentation for readability.
// Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.
let User = {
    name: 'Huzaifa',
    age: 16,
    Passion: "Generative AI"
};
console.log(JSON.stringify(User, ["name", "age"], 4));
