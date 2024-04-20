// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.

// Explain & TIP: setTimeout() is a built-in JavaScript function that allows you to execute a piece of code after a specified delay. It's especially useful for scheduling tasks, animations, or delaying execution without blocking the main thread.
function getData(data){
    console.log("Getting Data...");
    setTimeout(() => { 
        console.log(data);
        
     },3000)
}
getData(647284738)