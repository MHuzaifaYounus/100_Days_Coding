// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
let laptops_list1:number[] = [20000,40000,15000]

let laptops_list2:number[] = [100000,200000,150000]

let result:number[] = [...laptops_list1.sort() , ...laptops_list2.sort()]

console.log(result);


