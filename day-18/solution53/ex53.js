"use strict";
// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
let programFeatures = {
    codingLanguages: ["typescript", "javascript", "Python", "C", "C++", "C#", "PHP"],
    tools: ["notepad", "vs code", "pycharm"],
    frameworks: ["Django", "Flask", "Ruby", "Yii", "Laraval"],
};
let { codingLanguages, tools, frameworks } = programFeatures;
console.log(`Language: ${codingLanguages[0]} , Tool: ${tools[1]}, Framework: ${frameworks[2]}`);
