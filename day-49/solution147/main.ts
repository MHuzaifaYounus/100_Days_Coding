// Question 147: Explain how to handle errors in a callback pattern.

// Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first argument to the callback. This convention allows the callback function to check for errors before proceeding with its execution.
function fetchData(callback) {
    let error = new Error("This is Error")

    callback(null,"this is Data")//call back without error
    // callback(error,"this is Data")//call back with error
    
}

fetchData((error,data) => {
   if (error) {
    console.log(error.message);   
   }
   else{
    console.log(data);
    
   }
});
