// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

let names  = ["Huzaifa","Adil","Areeb","Anus"]

function getLenths(arr:string[]):number[] {
    return arr.map(e => {
        return e.length
     })
    
}

console.log(getLenths(names));
