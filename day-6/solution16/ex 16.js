"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let list = ["AK", "Usman", "Hamza", "Irtiza", "Areeb", "Adil", "Ayan"];
for (let key = 0; key < list.length; key++) {
    console.log(`"Hey ${list[key]}, join us for dinner at my place this Saturday!"`);
}
let personleft = list[4];
console.log(`
Hey everyone, ${personleft} won't be able to make it to dinner as he's busy with the championship.
`);
list[4] = "Anus";
for (let key = 0; key < list.length; key++) {
    console.log(`"Hey ${list[key]}, join us for dinner at my place this Saturday!"`);
}
console.log(`
Hey everyone, I have just found a bigger dinner table ,so I would like to invite three more of our frirends
`);
// Adding at the start
list.unshift("Mubashir");
// Adding in the Middle
list.splice(5, 0, "Zubair");
// adding in the end
list.push("Abdullah");
for (let key = 0; key < list.length; key++) {
    console.log(`"Hey ${list[key]}, join us for dinner at my place this Saturday!"`);
}
