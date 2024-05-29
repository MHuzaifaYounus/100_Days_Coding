interface Person  {
    name:string,
    age:number,
    greet(msg:string):void
}
let person:Person  = {
    name:'John',
    age:30,
    greet(msg){
        console.log(msg +" "+ this.name);
    } 
}
person.greet("Hello")

// BuilIn Interface 
const imgElement: HTMLImageElement = document.createElement("img");
imgElement.src = "img.png";
imgElement.alt = "My Image";

if (imgElement.complete) {
    console.log(`Image dimensions1: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
} 

// Interface can be extendes 
interface Animal {
    type:string,
   
}
interface Dog extends Animal {
    bark():void
}
class Pets implements Dog{
    type: "pet";
    bark(): void {
        console.log("bow bow");
        
    }
}
//merging
interface Dog1{
    type:string,
}
interface Dog1{
    color:string,
}
interface Dog1 {
    eats:string
}
let dog:Dog1 = {
    type:"german",
    color:"brown",
    eats:"dogfood"

}
