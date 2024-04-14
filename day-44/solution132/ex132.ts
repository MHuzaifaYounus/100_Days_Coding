// Question 132: Discuss the difference between default and named exports in JavaScript modules.

// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.

//importing a default export
import User from "./createID"
//importing a named export
import {admin} from "./createID"

let user = new User("Huzaifa")
let user1 = new admin("Huzaifa")
user.createID()
user1.checkAdmin()