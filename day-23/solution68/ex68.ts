// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

// Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.

function roundOff(num1:number,num2:number){
    return (num1 * num2).toFixed(2)
   
}
console.log(roundOff(2.283,3.465));

