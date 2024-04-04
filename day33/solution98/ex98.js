"use strict";
// Function to calculate the number of days left in the new year
function getDaysUntilNewYear() {
    // Create a new Date object for the current date
    let currentDate = new Date();
    // Create a new Date object for the next year's New Year's Day
    // The month is passed as 0 (January) since the month is zero-indexed
    let nextYear = new Date(currentDate.getFullYear() + 1, 0, 1).getTime();
    // Calculate the number of days between the current date and the next new Year's Day
    // First, subtract the current date's time from the next new Year's Day time
    // Then, divide by the number of milliseconds in a day (86400000 ms) to get the number of days
    let daysLeft = Math.floor((nextYear - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    // Return the number of days left in the new year
    return daysLeft;
}
// Log the number of days left in the new year to the console
console.log(`${getDaysUntilNewYear()} days are left in the New Year`);
