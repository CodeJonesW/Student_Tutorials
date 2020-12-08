var user1 = {
    name: "Bill",
    email: "adsf",
    location: "California",
    age: 26,
    isHappy: true
}

var user2 = {
    name: "Bob",
    email: "asdf",
    location: "California",
    age: 26,
    isHappy: true
}


// this is just javscript 
var button1 = document.getElementById("myButton")
var ageHTML = document.getElementById("myAge")
var choicesDiv = document.getElementById("choicesDiv")
var textInput = document.getElementById("text")
var bill = document.getElementById("bill")
var bob = document.getElementById("bob")
// console.log(button1, ageHTML)


function giveUserABirthday(userObject) {
    userObject.age = userObject.age + 1
    // userObject.age += 1
    console.log(`Happy Birthday! ${userObject.name} you are ${userObject.age}!`)
}


var elements = document.getElementsByClassName("character");
console.log(elements)
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function (e) {
        var clickedPerson = e.target.innerText

        if (clickedPerson === "Bob") {
            giveUserABirthday(user2)
            var myElement = document.createElement("p")
            ageHTML.innerText = `Happy Birthday! ${user2.name} you are ${user2.age}!`

        } else if (clickedPerson === "Bill") {
            giveUserABirthday(user1)
            var myElement = document.createElement("p")
            ageHTML.innerText = `Happy Birthday! ${user1.name} you are ${user1.age}!`

        }
    });
}