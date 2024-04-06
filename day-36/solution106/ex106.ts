// Question 106: Determine if a given year is a leap year using comparison operators.
function checkLeapYear(year:number) {
    
    let divisibleBy4 = year % 4
    let divisibleBy100 = year % 100
    let divisibleBy400 = year % 400
    
    if((divisibleBy4 === 0 && divisibleBy100 !== 0)|| divisibleBy400 === 0){
        console.log(`${year} is a leap year`);
        
    }
    else{
        console.log(`${year} is not a leap year`);
        
    }
}
checkLeapYear(2024)
checkLeapYear(2025)