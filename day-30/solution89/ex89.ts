// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

function convertNum(numstr:string){
    if (numstr.includes(".")) {
        return parseFloat(numstr)
        
    }
    else{
        return parseInt(numstr)
    }
}
console.log(convertNum("954.454"));
console.log(convertNum("95"));

