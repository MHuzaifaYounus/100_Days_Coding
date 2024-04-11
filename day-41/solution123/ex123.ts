// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

// Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.
function checkVowel(str:string) {
    let vowel = "aeiouAEIOU"
    for (let index = 0; index < str.length; index++) {
       if(vowel.includes(str[index])){
        console.log(`The First Vowel in this Word is "${str[index]}"`);
        break
       }     
       console.log(str[index]);
              
    }
}
checkVowel("ywqrbjfure")