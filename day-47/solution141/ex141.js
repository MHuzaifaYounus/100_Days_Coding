"use strict";
// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside an async function. Using await makes asynchronous code look and behave a little more like synchronous code, which can make it easier to understand and debug.
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        setTimeout(() => {
            return "huzaifa";
        }, 2000);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield getData();
        console.log(data);
    });
}
main();
