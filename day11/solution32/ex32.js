// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Ahmed", "Huzaifa", "Ali", "Amna", "Hammad"];
var new_users = ["Areeb", "Arab", "Huzaifa", "Amna", "Ayan"];
for (var index = 0; index < new_users.length; index++) {
    if (current_users.includes(new_users[index])) {
        console.log("".concat(new_users[index], " is alerady in use , Please enter a new one"));
    }
    else {
        console.log("".concat(new_users[index], " is available"));
    }
}
