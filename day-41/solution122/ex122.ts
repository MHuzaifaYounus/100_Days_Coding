// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

// Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a certain condition is met, even if the loop's original termination condition hasn't been reached yet.

let n = 10
while (n > 0) {
    console.log(n);
    n--
    if (n===5) {
     break
    }
}