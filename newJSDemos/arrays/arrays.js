
// Creates an array called animals.
var animals = ["parrot", "cat", "dog"];

// Logs the length of the animals array (3).
console.log(animals.length);

// Logs the animal cat.
console.log(animals[1]);

// Logs the animal dog.
console.log(animals[2]);

// Logs the animal parrot.
console.log(animals[0]);

// Logs the animal[3]. Since there is no animal in that index, undefined is logged.
console.log(animals[animals.length]);

// Logs the animal[2] which is dog.
console.log(animals[animals.length - 1]);

// Logs the index position for bear. Since bear isn't in the array, -1 is logged.
console.log(animals.indexOf("bear"));

// Logs the index position for parrot, which is 0.
console.log(animals.indexOf("parrot"));



// Created an array named myBands.
var myBands = ["britney", "selena", "bob dylan", "blink 182", "michael jackson"];

// Created a prompt to get the user's favorite band.
var userGuess = prompt("Which band or artist do you like?");

// Converts the user's answer to lowercase.
var userGuessLower = userGuess.toLowerCase();

// Now we check the myBands array to see if it contains the user's answer.
// If the user's band is not in the array...
if (myBands.indexOf(userGuessLower) === -1) {
    alert("Nah! They're pretty lame...");
}
// If it is in the array...
else {
    alert("OMG! I love them too!");
}

// Here we ask the user how old their cat is and store it in the catAge variable.
var catAge = prompt("How old is your cat?");

// Since catAge is a string, the numbers will not be added together mathematically as you would expect.
// Instead, 2 is added onto the end of the catAge string.
alert(catAge + 2);

// The parseInt function parses a string and returns an integer.
// Now that catAge is a proper number, the two numbers will be added together mathematically as expected.
alert(parseInt(catAge) + 2);