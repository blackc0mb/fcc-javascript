//Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString); // Change this line
console.log("** Regular expressions **")
console.log("Using the Test Method")
console.log(result1)

//Match Literal StringsPass
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);
console.log("Match Literal StringsPass")
console.log(result2)

//Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);
console.log("Match a Literal String with Different Possibilities")
console.log(result3)

//Ignore Case While Matching
let myStringW = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result4 = fccRegex.test(myStringW);
console.log("Ignore Case While Matching")
console.log(result4)