"use strict";
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only thos words.
let items = [3, 5, "biryani", 2, "korma", 8, "NAAN", 10];
let masalah_list = items.filter(item => typeof item === "string");
console.log(masalah_list);
