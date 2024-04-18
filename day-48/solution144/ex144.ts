
// Question 144: Explain the use of the Promise.all() method with an example.

// Explain & TIP: Promise.all() takes an iterable of Promises and returns a single Promise that resolves when all of the Promises in the iterable have resolved or when the iterable contains no Promises. It is rejected if any of the passed Promises are rejected. This method is useful for aggregating the results of multiple promises.
let getUserData = new Promise<string>((resolve,reject) => {
    setTimeout(() => {
        resolve("Success!")
    }, 2000);
 })

 let getCode = new Promise<number>((resolve,reject) => {
    setTimeout(resolve,2000,38298)
 })

 Promise.all([getUserData,getCode]).then((values) => { console.log(values);
  }).catch((err) => { console.log(err);
   })