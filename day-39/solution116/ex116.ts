// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

// Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.
function checkSeason(month: number) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 4:
        case 5:
        case 6:
            console.log("Spring");
            break;
        case 7:
        case 8:
        case 9:
            console.log("Summer");
            break;
        case 10:
        case 11:
        case 12:
            console.log("Autumn");
            break;
        default:
            console.log("Enter the valid month");

            break;
    }

}
checkSeason(4)