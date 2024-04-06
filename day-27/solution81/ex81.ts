// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

let person = {
    name:"Huzaifa",
    age:16,
    Skill:"Web Dev"
}
function getObj(object:{}) {
    for (const property in person) {
        console.log(`${property} : ${person[property]}`);      
        }
    }
getObj(person)