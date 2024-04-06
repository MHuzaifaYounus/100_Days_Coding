// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
 
function checkIdentical(str:string){
    let mainstr = "Huzaifa"
    return mainstr.toLocaleLowerCase() === str.toLocaleLowerCase()
}
console.log(checkIdentical("huzaifa"));
