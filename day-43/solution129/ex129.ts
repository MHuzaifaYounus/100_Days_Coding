// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.
let obj = {
    userName:"Huzaifa",
    getName:function(){
        return this.userName 
    },
    getNameByArrow:() => {return this.userName}
}
console.log(obj.getName()); // print the  username
console.log(obj.getNameByArrow());// shows undefined

