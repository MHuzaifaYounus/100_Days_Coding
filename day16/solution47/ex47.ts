
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
let laptops:object[] = [{make:"Apple",model:"air14",year:"2020"},{make:"Dell",model:"XPS",year:"2018"},{make:"Linux",model:"Ubunto",year:"2018"}]
// Old ways 
// let laptop1:object = arr[0]
// let laptop2:object = arr[1]

// new ways 
let [laptop1,laptop2] = laptops;

console.log(laptop1);
console.log(laptop2);


