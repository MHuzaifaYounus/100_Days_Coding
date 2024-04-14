export class User {
    username: string;
    constructor(username: string) {
        this.username = username
    }
    logMe(){
        console.log(`Welcome ton Our Website ${this.username}`);       
    }
}