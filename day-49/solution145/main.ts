// // Question 145: Create a function that accepts a callback and invokes it with some arguments.

// Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.
function getData(callback:(username:string,id:number)=>void,username:string,id:number) {
    callback(username,id)
}
let showData = (username:string,id:number) => { 
    console.log(username , id)
};
getData(showData,"Huzaifa",647367)


