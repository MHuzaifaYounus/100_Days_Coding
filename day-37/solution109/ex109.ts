// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

let time  = new Date()
let currentHour = time.getHours()
if(currentHour < 12){
    console.log(`Good Morning`);
}
else if(currentHour >= 12 && currentHour < 18){
    console.log(`Good Afternoon`);
}
else if(currentHour >= 18 && currentHour < 5){
    console.log(`Good Afternoon`);
}
