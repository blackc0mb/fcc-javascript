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

//Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result5 = extractStr.match(codingRegex); // Change this line
console.log("Extract the word 'coding' from this string.")
console.log(result5)

//Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result6 = twinkleStar.match(starRegex); // Change this line
console.log("Twinkle, twinkle, little star")
console.log(result6)

//Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result7 = unRegex.test(exampleStr);
console.log("Match Anything with Wildcard Period")
console.log(result7)

//Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result8 = quoteSample.match(vowelRegex); // Change this line
console.log("Match Single Character with Multiple Possibilities")
console.log(result8)

//Match Letters of the Alphabet
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result9 = quoteSample2.match(alphabetRegex); // Change this line
console.log("Match Letters of the Alphabet")
console.log(result9)

//Match Numbers and Letters of the Alphabet
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex3 = /[h-s2-6]/ig; // Change this line
let result10 = quoteSample3.match(myRegex3); // Change this line
console.log("Match Numbers and Letters of the Alphabet")
console.log(result10)

//Match Single Characters Not Specified
let quoteSample4 = "3 blind mice.";
let myRegex4 = /[^0-9aeiou]/gi; // Change this line
let result11 = quoteSample4.match(myRegex4); // Change this line
console.log("Match Single Characters Not Specified")
console.log(result11)

//Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex5 = /s+/ig; // Change this line
let result12 = difficultSpelling.match(myRegex5);
console.log("Match Characters that Occur One or More Times")
console.log(result12)

//Match Characters that Occur Zero or More TimesPassed
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/ //Change this line
let result13 = chewieQuote.match(chewieRegex)
console.log("Match Characters that Occur Zero or More TimesPassed")
console.log(result13)