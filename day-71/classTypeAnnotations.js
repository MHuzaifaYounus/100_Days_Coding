"use strict";
// class type annotations 
class Product {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.prize = 0;
    }
    getInfo() {
        return `Product id: ${this.id}, Product name: ${this.name} , product price: ${this.price}`;
    }
    get price() {
        return this.prize;
    }
    set price(number) {
        this.prize = number;
    }
}
class Product2 extends Product {
    revealId() {
        return this.id;
    }
}
let product1 = new Product(32, "Shirt");
let product2 = new Product2(32, "Shirt");
product1.price = 400;
console.log(product1.price);
console.log(product1.getInfo());
console.log(product2.revealId());
