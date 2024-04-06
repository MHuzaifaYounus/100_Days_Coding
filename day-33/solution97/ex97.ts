// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.

function currentDate(){
    let date = new Date();

    let month = String(date.getMonth() + 1).padStart(2,"0"); // getMonth() returns a zero-based value, so we add 1 to get the actual month number
    let day = String(date.getDate()).padStart(2,"0");
    let year = date.getFullYear();
    
    return `Current date: ${day}-${month}-${year}`
}
console.log(currentDate());
     