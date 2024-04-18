// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

// Explain & TIP: Promises in JavaScript are used for asynchronous computations and can be in one of these states: pending, fulfilled, or rejected. A Promise that resolves after a delay demonstrates how to handle operations that take some time to complete, like fetching data or timing events.

let getHello =  new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello world')
    }, 2000);
})
getHello.then((result) => { console.log(result);
 })


