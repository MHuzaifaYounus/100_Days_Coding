"use strict";
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.
//importing a default export
const createID_1 = __importDefault(require("./createID"));
//importing a named export
const createID_2 = require("./createID");
let user = new createID_1.default("Huzaifa");
let user1 = new createID_2.admin("Huzaifa");
user.createID();
user1.checkAdmin();
