// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.

// Blueprint 
interface studentInformation {
    name: string,
    age: number,
    classes: string[]
}
// filling the blueprint with information 
let student1: studentInformation = {
    name:"Huzaifa",
    age:16,
    classes:["Maths","Physics","Chemistry"]
}
console.log(student1);

