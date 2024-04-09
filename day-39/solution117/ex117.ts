// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.
function checkFan(binary: number) {
    switch (binary) {
        case 0:
            console.log("This fan is OFF");
            break;
        case 1:
            console.log("This fan is ON");
            break;

        default:
            console.log("Please Turn The Correct Button ON/OFF");
            break;
    }
}
checkFan(2)