// Question 99: Generate a date object representing your next birthday and log it to the console.

// Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not.
function getMyBirthDate(day:number,month:number){
    let currentDate = new Date()
    let birthday = new Date(currentDate.getFullYear(),month -1,day)
    if(birthday<currentDate){
        birthday.setFullYear(currentDate.getFullYear()+1)
    }
    return birthday
    
    
}
console.log(`Your Next BirthDay Will Be On : ${getMyBirthDate(14,5).toDateString()}`);
