// generics Fuctions
function returnVal<T>(val:T):T{
    return val
}
let number:number = returnVal<number>(100)
let text:string = returnVal<string>("hi i am here")
let isAvailable:boolean = returnVal<boolean>(true)
console.log(typeof(number));
console.log(typeof(text));
console.log(typeof(isAvailable));


// Generics with multiple types
function returnstring<T,S>(val1:T,val2:S):string{
    return `this is the value 1 : ${val1} and this is value 2: ${val2}`
}
console.log(returnstring<boolean,number>(true,2789));

// Generics Class 
class User<T>{
    constructor(public name:T){

    }
    sendMsg(msg:T){
        console.log(`${msg} - ${this.name}`);
    }
}
let user1  = new User<string|number>("Huzaifa")
user1.sendMsg(3434)

// Generics with Interface
interface Game{
    name:string,
    version:number,
    size:string
}
class Installer<T>{
    public data:T[] = [] 
    add(item:T){
        this.data.push(item)
    }
}
let newGame = new Installer<Game>()
newGame.add({
    name:"Mario",
    version:1.0,
    size:"100MB"
})
console.log(newGame);
