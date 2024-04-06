"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
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
