// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var list = ["Abdullah", "Usman", "Hamza", "Irtiza", "Areeb", "Adil", "Huzaifa"];
for (var key = 0; key < list.length; key++) {
    console.log("\"Hey ".concat(list[key], ", join us for dinner at my place this Saturday!\""));
}
var personleft = list[4];
console.log("\nHey everyone, ".concat(personleft, " won't be able to make it to dinner as he's busy with the championship.\n"));
list[4] = "Anus";
for (var key = 0; key < list.length; key++) {
    console.log("\"Hey ".concat(list[key], ", join us for dinner at my place this Saturday!\""));
}
console.log("\nHey everyone, I have just found a bigger dinner table ,so I would like to invite three more of our frirends\n");
// Adding at the start
list.unshift("Mubashir");
// Adding in the Middle
list.splice(5, 0, "Zubair");
// adding in the end
list.push("Amna");
for (var key = 0; key < list.length; key++) {
    console.log("\"Hey ".concat(list[key], ", join us for dinner at my place this Saturday!\""));
}
// Appologies msg 
console.log("\nApologies for the limited invitations, I could only invite two people due to space constraints.\n");
for (var key = 2; key < list.length;) {
    console.log("Sorry ".concat(list[0], " , I could not invite you due to some dinnner management problem"));
    list.shift();
}
for (var key = 0; key < list.length; key++) {
    console.log("\n Hey ".concat(list[key], " , you are still invited for this dinner ;)"));
}
list.pop();
list.pop();
console.log(list);
