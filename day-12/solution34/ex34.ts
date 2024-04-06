// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let Pizzas_flavors:string[] = ["Afghani Tikkah","Malai boti","Chiken Cheese"];
for (let index = 0; index < Pizzas_flavors.length; index++) {
    if(Pizzas_flavors[index] == "Afghani Tikkah"){
        console.log("Afghani tikka pizza features marinated chicken with traditional Afghani spices.")
    }
    else if(Pizzas_flavors[index] == "Malai boti"){
        console.log("Malai boti pizza offers succulent, creamy marinated chicken pieces.")
    }
    else if(Pizzas_flavors[index] == "Chiken Cheese"){
        console.log("Chicken cheese pizza combines tender chicken with gooey, melted cheese.")
    }
    else{

    }
}
console.log("\nHow much I like pizza?\n")
console.log("Afghani tikka pizza delights with its tender, marinated chicken and aromatic blend of traditional spices. Malai boti pizza offers a creamy and mildly spiced flavor, showcasing succulent, marinated chicken pieces. Chicken cheese pizza combines tender chicken with gooey, melted cheese for a satisfying and comforting option.\n")
// additional sentence
console.log("In conclusion I like These Three Flavors Of pizza most.")