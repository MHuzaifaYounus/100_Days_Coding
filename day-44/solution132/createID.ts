export default class User{
    name:string
    constructor(name:string){
        this.name = name
    }
    createID(){
        console.log(`${this.name}, Your Id is "12324424"`);
        
    }
}
export class admin extends User{
    constructor(name:string){
        super(name)
    }
   
    checkAdmin(){
        if(this.name.toLocaleLowerCase() === "huzaifa"){
            console.log(`Welcome Admin`);
            
        }
        else{
            console.log(`${this.name} is not an Admin`);          
        }
    }
}