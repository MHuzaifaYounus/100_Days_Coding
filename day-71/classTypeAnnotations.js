var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class type annotations 
var Product = /** @class */ (function () {
    function Product(id, name) {
        this.id = id;
        this.name = name;
        this.prize = 0;
    }
    Product.prototype.getInfo = function () {
        return "Product id: ".concat(this.id, ", Product name: ").concat(this.name, " , product price: ").concat(this.price);
    };
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this.prize;
        },
        set: function (number) {
            this.prize = number;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var Product2 = /** @class */ (function (_super) {
    __extends(Product2, _super);
    function Product2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Product2.prototype.revealId = function () {
        return this.id;
    };
    return Product2;
}(Product));
var product1 = new Product(32, "Shirt");
var product2 = new Product2(32, "Shirt");
product1.price = 400;
console.log(product1.price);
console.log(product1.getInfo());
console.log(product2.revealId());
