// Here we create our prompt and confirm variables which will store user input.
var confirmSushi = confirm("Do you like sushi?");
console.log("Return value of confirm saved as confirmSushi", confirmSushi)
var confirmGingerTea = confirm("Do you like Ginger Tea?");
var sushiType = prompt("What kind of sushi do you like?");
console.log("prompt variable", sushiType)





// If the user likes sushi (confirmSushi === true), we run the following block of code.
if (confirmSushi) {
    alert("You like " + sushiType + "!");
}
// If the user likes ginger tea (confirmGingerTea === true), we run the following block of code.
else if (confirmGingerTea) {
    alert("You like ginger tea!!");
}
// If neither of the previous condition were true, we run the following block of code.
else {
    alert("You don't like sushi or ginger tea.");
}


// when using confirms 
// the return value is a boolean 

// when using prompts 
// the return value is whatver was inputed

//alerts dont have a return value





if (true === true) {
    alert("hi");
}
else {
    alert("bye");
}

if (false === false) {
    alert("dude");
}
else {
    alert("nope");
}

if ("4" === 4) {
    alert("puppies");

}
else {
    alert("goats");
}

if ("4" == 4) {
    alert("puppies");
    console.log("true")
}
else {
    alert("goats");
}

if (true) {
    alert("goo goo dolls");
}
else {
    alert("vanilla ice");
}

if (false) {
    alert("the neighborhood");
}
else {
    alert("one direction");
}

if (("5" + "5") === "55") {
    alert("tofu");
}
else {
    alert("soybean");
}

if ((6 + "5") === "65") {
    alert("richard");
}
else {
    alert("branson");
}

// Here we ask the user if they eat steak, and store the result (true/false) in a variable.
var eatSteak = confirm("Do you eat steak?");

// If the user eats steak (eatSteak === true) we run the following code block.
if (eatSteak) {
    alert("Here's a steak");
}
// If the above condition isn't met (eatSteak !== true), run the following block of code instead.
else {
    alert("Here's a tofu stir fry!");
}

// Bonus
// Here we ask the user what year they were born, and store their response to a variable.
var birthYear = prompt("What year were you born?");

// If the user was born before 1997, alert "SAKE SAKE SAKE!"
if (birthYear < 1997) {
    alert("SAKE SAKE SAKE!");
}
// Else if the user was born after 1997, alert "No Sake for you!"
else if (birthYear > 1997) {
    alert("No Sake for you!");
}
// If neither of the previous conditions was true (birthYear === 1995) we alert "You inched by!"
else {
    alert("You inched by! Sake Sake Sake!");
}
