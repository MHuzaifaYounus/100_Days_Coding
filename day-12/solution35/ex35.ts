// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals:string[] = ["Crocodile","Tiger","Lion"]
for (let index = 0; index < animals.length; index++) {
    if(animals[index]== "Crocodile"){
        console.log("The tail of Crocodile is long and massive, and the skin is thick and plated.\n ")
    }
    else if(animals[index]== "Tiger"){
        console.log("Tigers have reddish-orange coats with prominent black stripes.\n ")
    }
    else if(animals[index]== "Lion"){
        console.log("Lions have strong, compact bodies and powerful forelegs.\n")
    }
    else{

    }
}
console.log("The most common thing in all of these animals is that they all have very sharp theeth ")