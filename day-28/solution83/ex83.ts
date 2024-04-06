// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

function getUpperAndLowerCase(input:string) {
    let uppercase:string = input.toUpperCase()
    let lowercase:string = input.toLowerCase()
    console.log(`Upper Case: ${uppercase}, Lower Case: ${lowercase}`);
}
getUpperAndLowerCase("Huzaifa Younus")