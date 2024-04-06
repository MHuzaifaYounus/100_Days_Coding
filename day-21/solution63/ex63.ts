
// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes.
// making a special type alias 
type shape ={
    shape:"circle"|"rectangle",
    color?:string,
    radius?:number,
    height?:number
}
let circle:shape = {
    shape:"circle",
    color :"red",
    radius:20

}
let rectangle:shape = {
    shape:"rectangle",
    color :"yellow",
    height:32
 
}
console.log(circle);
console.log(rectangle);

