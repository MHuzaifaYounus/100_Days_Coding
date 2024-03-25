// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

const speedOfSound: number = 332 //  m/s
let carSpeed: number = 11 //  m/s
console.log(`Before car gets Boost Up: ${carSpeed}`);
// car gets boost up 
carSpeed = 16 //  m/s
console.log(`After car gets Boost Up: ${carSpeed}`);
// catching the error 
try {
    speedOfSound = 299
    console.log(`Changed speed of sound is: ${speedOfSound}`);

} catch (error) {
    console.log(`Changing the value of speed of sound is not possible cuz it is constant`);
}

