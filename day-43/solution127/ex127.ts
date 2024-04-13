// Question 127: Convert a traditional function expression to an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.
let traditionalAdd = function(a:number,b:number){
    return a+b
}
let arrowAdd = (a:number,b:number) => (a+b)

console.log(traditionalAdd(2,4));
console.log(arrowAdd(1,3));
