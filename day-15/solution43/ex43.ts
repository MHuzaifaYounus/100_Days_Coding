// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians_name: string[] = ["Shahrukh Zahoor", "Tomas De La Cruz", "Derren Brown", "Lance Burton"]

function show_magicians() {
    for (let index = 0; index < magicians_name.length; index++) {
        console.log(magicians_name[index])

    }
}
function make_great():string[]{
    let copyofmagicians_name: string[] = []

    for (let index = 0; index < magicians_name.length; index++) {
        copyofmagicians_name[index] = `The Great ${magicians_name[index]}`
    }
    return copyofmagicians_name
}
let newarray = make_great()
show_magicians()
console.log(newarray)