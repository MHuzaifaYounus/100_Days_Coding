"use strict";
// Question 149: Explain the concept of the event loop in JavaScript with an example.
// Explain & TIP: The event loop is a fundamental concept in JavaScript, enabling asynchronous operations. It monitors the call stack and the callback queue. If the call stack is empty, it moves the first event from the queue to the stack, ensuring non-blocking execution.
function getData(data) {
    setTimeout(() => {
        console.log(data);
    }, 0);
}
console.log(`Firts data`);
getData("second Data");
console.log(`third data`);
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.
