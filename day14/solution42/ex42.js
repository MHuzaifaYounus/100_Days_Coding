// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians_name = ["Shahrukh Zahoor", "Tomas De La Cruz", "Derren Brown", "Lance Burton"];
function show_magicians() {
    for (var index = 0; index < magicians_name.length; index++) {
        console.log(magicians_name[index]);
    }
}
show_magicians();
function make_great() {
    for (var index = 0; index < magicians_name.length; index++) {
        magicians_name[index] = ("The Great ".concat(magicians_name[index]));
    }
}
make_great();
show_magicians();
