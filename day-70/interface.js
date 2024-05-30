"use strict";
let person = {
    name: 'John',
    age: 30,
    greet(msg) {
        console.log(msg + " " + this.name);
    }
};
person.greet("Hello");
// BuilIn Interface 
const imgElement = document.createElement("img");
imgElement.src = "img.png";
imgElement.alt = "My Image";
if (imgElement.complete) {
    console.log(`Image dimensions1: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
}
class Pets {
    bark() {
        console.log("bow bow");
    }
}
let dog = {
    type: "german",
    color: "brown",
    eats: "dogfood"
};
