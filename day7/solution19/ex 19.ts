// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
let list = ["Abdullah","Usman","Hamza","Irtiza","Areeb","Adil","Huzaifa"]


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
list.unshift("Mubashir")
// Adding in the Middle
list.splice(5,0,"Zubair")
// adding in the end
list.push("Amna") 

for (let key = 0; key < list.length; key++) {
    console.log(`"Hey ${list[key]}, join us for dinner at my place this Saturday!"`);
    
}

// Appologies msg 

console.log(`
Apologies for the limited invitations, I could only invite two people due to space constraints.
`)

for (let key = 2; key < list.length ;) {
    console.log(`Sorry ${list[0]} , I could not invite you due to some dinnner management problem`)
    list.shift()
}

for (let key = 0; key < list.length; key++) {
    console.log(`\n Hey ${list[key]} , you are still invited for this dinner ;)`)
    
}

console.log(`\n The number of peoples who are invited ${list.length}`)