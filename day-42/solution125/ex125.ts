
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

// Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.
let data = {
    username :"Huzaifa",
    age:16,
    getData:function(){
        return `${this.username} is ${this.age} years old `
        
    }
}
console.log(data.getData());