"use strict";
// generics Fuctions
function returnVal(val) {
    return val;
}
let number = returnVal(100);
let text = returnVal("hi i am here");
let isAvailable = returnVal(true);
console.log(typeof (number));
console.log(typeof (text));
console.log(typeof (isAvailable));
// Generics with multiple types
function returnstring(val1, val2) {
    return `this is the value 1 : ${val1} and this is value 2: ${val2}`;
}
console.log(returnstring(true, 2789));
// Generics Class 
class User {
    constructor(name) {
        this.name = name;
    }
    sendMsg(msg) {
        console.log(`${msg} - ${this.name}`);
    }
}
let user1 = new User("Huzaifa");
user1.sendMsg(3434);
class Installer {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let newGame = new Installer();
newGame.add({
    name: "Mario",
    version: 1.0,
    size: "100MB"
});
console.log(newGame);
