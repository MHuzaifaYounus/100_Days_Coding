"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["Oranges", "Bananas", "Mangoes"];
if (favorite_fruits.includes("Appples")) {
    console.log("Red Apples Are Deliciuos");
}
if (favorite_fruits.includes("Oranges")) {
    console.log("Oranges are good in Winters");
}
if (favorite_fruits.includes("Bananas")) {
    console.log("Bananas Milk Shake is very Amazing");
}
if (favorite_fruits.includes("Mangoes")) {
    console.log("Mangoes are liked by Everyone");
}
if (favorite_fruits.includes("Kiwi")) {
    console.log("You really like Kiwi");
}
else { }