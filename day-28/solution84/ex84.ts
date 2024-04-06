// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

function replaceJavaScript(sentence:string){
    let replacedSentence:string = sentence.replaceAll("JavaScript","Typescript")
    return replacedSentence 
}
let inputSentence = "JavaScript developers often use JavaScript frameworks to simplify JavaScript development." 
console.log(replaceJavaScript(inputSentence));
