// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians_name = ["Shahrukh Zahoor", "Tomas De La Cruz", "Derren Brown", "Lance Burton"];
function show_magicians(magicians_name) {
    for (var index = 0; index < magicians_name.length; index++) {
        console.log(magicians_name[index]);
    }
}
show_magicians(magicians_name);
