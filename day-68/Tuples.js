"use strict";
// Tuples in Typescript
let details = ["huzaifa", 17, true];
//         string , number, bool
details = ["Ahmed", 89, false];
// Destructuring the tuple into individual variables
const [username, age, isStudent] = details;
console.log(username, age, isStudent);
