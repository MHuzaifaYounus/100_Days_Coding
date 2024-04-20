
// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

// Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations, or set timers without blocking the main thread, enabling the continuation of code execution. Synchronous code, in contrast, runs sequentially, blocking further execution until the current operation completes.


// // Asynchronous callbacks
function getData(data) {
    setTimeout(() => {
        console.log(data);
    }, 2000)
}
console.log("Before Execution of data");
getData("this is data")// do not wait for it
console.log("After Execution of data");

// Synchronous callbacks

console.log("Before Execution of data");
for (let i = 0; i < 1e9; i++) {} // wait for it
console.log("After Execution of data")
