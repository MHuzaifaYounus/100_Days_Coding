// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var PUBG = 'Shooting Game';
var FreeFire = 'Shooting Game';
var Minecraft = 'Crafting';
var Gta = 'Open World';
var AssasinsCreed = 'Action Game';
var Mario = '2D Game';
var Asphalt = 'Racing Game';
var SubwaySurfers = 'Mobile Game';
var Tekken3 = 'Fightning Game';
var Fortnight = 'Battelground Game';
var MinecraftYear = 2011;
var Gamers = ["Mythpat", "TechnoGamerz", "Weider Insaan", "Dream"];
// More Tests 
// • Tests for equality and inequality with strings
console.log("Is Fortnight= 'Battelground Game'? I predict True.");
console.log(Fortnight == 'Battelground Game');
console.log("Is Fortnight= 'Fightning Game'? I predict False.");
console.log(Fortnight == 'Fightning Game');
// • Tests using the lower case function
console.log("Is FreeFire = 'shooting game(lowercase)'? I predict False.");
console.log(FreeFire.toLowerCase() == 'Shooting Game');
console.log("Is FreeFire = 'shooting game'? I predict True.");
console.log(FreeFire.toLowerCase() == 'shooting game');
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is Minecraft Publish on 2011? I predict True.");
console.log(MinecraftYear == 2011);
console.log("Is Minecraft Publish on 2000? I predict False.");
console.log(MinecraftYear == 2000);
console.log("Is Minecraft Publish after 2000? I predict True.");
console.log(MinecraftYear > 2000);
console.log("Is Minecraft Publish before 2000? I predict False.");
console.log(MinecraftYear < 2000);
console.log("Is Minecraft Publish on 2011 or before 2011? I predict True.");
console.log(MinecraftYear <= 2011);
console.log("Is Minecraft Publish on 2011 or After 2011? I predict True.");
console.log(MinecraftYear >= 2011);
// • Tests using "and" and "or" operators
console.log("Is FreeFire is Racing Game or Crafting Game? I predict False.");
console.log(FreeFire == 'Racing Game' || FreeFire == 'Crafting Game');
console.log("Is FreeFire is Shooting Game and Minecraft is Crafting Game? I predict True.");
console.log(FreeFire == 'Shooting Game' && Minecraft == 'Crafting');
// • Test whether an item is in a array
console.log("Is Weider Insaan a Gamer? I predict True.");
console.log(Gamers.includes("Weider Insaan"));
console.log("Is MrBeast a Gamer? I predict False.");
console.log(Gamers.includes("MrBeast"));
// • Test whether an item is not in a array
console.log("Is Dream not a Gamer? I predict False.");
console.log(!Gamers.includes("Dream"));
console.log("Is Codewithharry not a Gamer? I predict True.");
console.log(!Gamers.includes("Codewithharry"));
