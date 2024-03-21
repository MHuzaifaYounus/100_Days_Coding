// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user profile by itself and can tell you about the user.

// this function takes the details from user to make his profile 
function show_profile(){
    let name = "Huzaifa"
    let age = 16
    // stores the name and age of user 
    let user_details = {
        name:name,
        age:age,
    }
    // shows the user profile details 
    console.log(user_details); 
}
// making profile 
show_profile()
