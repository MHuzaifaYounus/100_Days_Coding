// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

// Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.

let data = new Map<string,string>([
    ["Pakistan","Islamabad"],
    ["Turkey","Istambul"],
    ["Japan","Tokyo"],
    ["Canada","Ottawa"],

])
function checkKey(country:string) {
  
    let checked = data.has(country)
    if(checked){
        console.log(`The Capital Of ${country} Is ${data.get(country)}`);
    }
    else{
        console.log(`${country} is not on the Map`);
    }
}
checkKey("Canada")