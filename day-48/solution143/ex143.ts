// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

// // Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.

let getData = new Promise<string>((resolve,reject) => { 
    let data = Math.random() > 0.4 //60% chances to get the data
    setTimeout(() => {
        if (data) {
            resolve("Data Fetched Successfully")
        }
        else{
            reject("Error in fetching the data")
        }
    }, 2000);
 })

 getData.then((result) => { console.log(result);
  }).catch((err) => { console.log(err);
   })