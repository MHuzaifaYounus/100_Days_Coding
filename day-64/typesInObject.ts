// Types in objects with type annotations 
let details:{
    name:string,
    age:number,
    address:{
        postalcode:number,
        state:string,
    }
}
details = {
    name:"Huzaifa",
    age:17,
    address:{
        postalcode:74400,
        state:"Sindh",
    }
}
console.log(details.address);
