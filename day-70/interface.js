var person = {
    name: 'John',
    age: 30,
    greet: function (msg) {
        console.log(msg + " " + this.name);
    }
};
person.greet("Hello");
