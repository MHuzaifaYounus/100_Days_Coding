// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames = [];
for (var index = 0; index < usernames.length; index++) {
    if (usernames[index] == "Admin") {
        console.log("Hello ".concat(usernames[index], ",would you like to see your secret Passwords?"));
    }
    else {
        console.log("Hello ".concat(usernames[index], ", thank you for logging in again"));
    }
}
if (usernames.length == 0) {
    console.log("We need to find some users!");
}
else {
}
