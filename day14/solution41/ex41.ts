// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians_name:string[] = ["Shahrukh Zahoor","Tomas De La Cruz","Derren Brown","Lance Burton"]

function show_magicians(magicians_name) {
    for (let index = 0; index < magicians_name.length; index++) {
        console.log(magicians_name[index])
        
    }
}
show_magicians(magicians_name)