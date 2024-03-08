// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
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
console.log("\n The number of peoples who are invited ".concat(list.length));
