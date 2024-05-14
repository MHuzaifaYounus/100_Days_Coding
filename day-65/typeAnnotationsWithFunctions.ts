// Type Annotations With Functions 
function getSum(num1:number,num2:number):number{
    return num1 + num2
}
getSum(4,5)
// optional parameter 
function getSum1(num1:number,num2:number,num3?:number):number{
    if (num3 !== undefined) {
        return  num1 + num2 +num3
    }
    return num1 + num2
}
getSum1(4,5)
getSum1(4,5,8)
// default parameter

function getSum2(num1:number,num2:number= 8):number{
    return num1 + num2
}
getSum2(2)
// rest parameter | spread operator(...)
function getSumAll(...nums:number[]) {
    return nums.reduce((a,b) => a+b )
    
}
getSumAll(4,5,6,7,7,7,+true)
// arrow function 
let addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(10, 20)); 

// anonymous functions
const add = function (num1: number, num2: number): number {
    return num1 + num2;
  };
  console.log(add(10, 20)); // Output: 30

// void 
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }

// never
// never
function throwError(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {
      // This function never exits (infinite loop).
    }
  }