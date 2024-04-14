"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
    createID() {
        console.log(`${this.name}, Your Id is "12324424"`);
    }
}
exports.default = User;
class admin extends User {
    constructor(name) {
        super(name);
    }
    checkAdmin() {
        if (this.name.toLocaleLowerCase() === "huzaifa") {
            console.log(`Welcome Admin`);
        }
        else {
            console.log(`${this.name} is not an Admin`);
        }
    }
}
exports.admin = admin;
