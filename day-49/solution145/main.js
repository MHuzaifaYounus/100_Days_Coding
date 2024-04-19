"use strict";
// // Question 145: Create a function that accepts a callback and invokes it with some arguments.
// Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.
function getData(callback, username, id) {
    callback(username, id);
}
let showData = (username, id) => {
    console.log(username, id);
};
getData(showData, "Huzaifa", 647367);
