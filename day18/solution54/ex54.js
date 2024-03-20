"use strict";
// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// Explain & TIP: This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information.
let Dollars_value = {
    PKR: 279.53,
    IND: 83.15,
    EUR: 0.92,
    JPY: 140.53,
};
// Dollar in 2023 
console.log(`Dollar In 2023:`);
console.log(Dollars_value);
// changing values 
function changeValue(key, value) {
    // Setting up a section in the list with a changeable name
    Dollars_value[key] = value;
    return Dollars_value;
}
changeValue("PKR", 278.75);
changeValue("IND", 83.02);
changeValue("EUR", 0.92);
changeValue("JPY", 151.44);
// Dollar in 2024 
console.log(`Dollar In 2024:`);
console.log(Dollars_value);
