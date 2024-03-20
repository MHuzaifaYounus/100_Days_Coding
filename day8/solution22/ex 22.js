"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let list1 = ["AK", "Usman", "Hamza", "Irtiza", "Areeb", "Adil", "Ayan"];
console.log(`"Hey ${list1[5]}, join us for dinner at my place this Saturday!"`);
console.log(`"Hey ${list1[1]}, join us for dinner at my place this Saturday!"`);
console.log(`"Hey ${list1[0]}, join us for dinner at my place this Saturday!"`);
console.log(`"Hey ${list1[2]}, join us for dinner at my place this Saturday!"`);
console.log(`"Hey ${list1[4]}, join us for dinner at my place this Saturday!"`);
// index 7 is undefined 
console.log(`"Hey ${list1[7]}, join us for dinner at my place this Saturday!"`);
