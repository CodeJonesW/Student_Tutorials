// data types
// in terminal use node *filename to run file to test with console.log()
// strings, booleans, arrays, objects, integers, floats

// const NumberPrompt = require("inquirer/lib/prompts/number")

// let vs const
// use let when you intend to redefine variable and const for when you do not intend it to change.

var string1 = "this is a string!"
var string2 = 'this is also a string!'



// double quotes cannot go inside single quotes
var string3 = "this is a 'a famous quote'"

// console.log(string1 + string2)


var pet = 'cat'
var sentence = `my favorite pet is a ${pet}`

// console.log(sentence)


var newString = `this is a string using interpolation to reference a variable like ${string3}`
// console.log(newString)



// Arrays
// arrays are like lists. Arrays can be filled with any data type.
var pets = ['cat', 'dog', 'bird', 1, 2, 3, 0.6]

// access array index
// pets[3]


// lots array methods available. learn as you grow
// Array.push() method
// adds an index to the end of an array
pets.push('alligator')
// console.log(pets)



// integers are whole numbers  1 , 2 , 3 , 123
// floats are non whole numbers 0.983637 or 1.28373


// Booleans

let value1 = true
let value2 = false

// console.log(value1)


//Objects
// object keys are actually strings if you analyze the data type
// objects are not ordered numerically
// objects are made up of key value pairs


let userProfile1 = {
    name: "Will",
    email: "willjones@email.com",
    location: "USA",
    age: 27,
    favoriteFoods: ['pizza', 'curry', 'icecream'],
    isHappy: true,
    instruments: {
        guitars: ["esp", "fender"],
        keyboards: "native Instruments"
    }
}


// console.log(userProfile1)

var cat = "cat"

var myArray = [1, 2, 3, 4]

// console.log(myArray)

// Dot notation
// console.log(userProfile1.favoriteFoods[2], userProfile1.favoriteFoods[1])

// bracket notation
// console.log(userProfile1['location'])
// console.log(userProfile1.location)

let exampleVariable = "location"
// userProfile1.location
// console.log(userProfile1[exampleVariable])

userProfile1.exampleVariable

// console.log(userProfile1.favoriteFoods[0])


// array of objects
var array = [{ pet1: 'cat', pet2: 'bird' }, { pet1: 'giraffe' }, { pet1: 'dog' }]
// console.log(array[0].pet1)

array[1].pet1 = "somethingNew"


array.push({ newPet: "snake" })
// console.log(array)


// arrays in arrays
let tricky = [[1, 2], [3, 4], [5, 6]]


// console.log(tricky[2][1])



function simpleFunction() {
    console.log("Hello Coders")
}

// simpleFunction()


function slightyComplicated(name) {
    console.log("Hello " + name)
}

slightyComplicated("Will")



// write a function to increase age
function giveUserABirthday(userObject) {
    // userObject.age = userObject.age + 1
    userObject.age += 1
}

// giveUserABirthday(userProfile1)

// console.log(userProfile1)

function changeEmail(userObject, emailInput) {
    userObject.email = emailInput
}

changeEmail(userProfile1, "newEmail@email.com")
console.log(userProfile1)


function sillyName(numberInput) {
    console.log(numberInput + 5)
}




// this is just javscript 
// const button1 = document.getElementById("myButton")
// const ageHTML = document.getElementById("ageHTMLElement")


// button1.addEventListener("click", function () {
//     // console.log(button1)
//     giveUserABirthday(userProfile1)
//     ageHTML.innerHTML = userProfile1.age
// })

// this is jquery
// $("myButton").click(function () {
//     giveUserABirthday(userProfile1)
//     ageHTML.innerHTML = userProfile1.age
// })

// button1.addEventListener("onmouseover", function () {
//     changeColor(button1)
// })


// function changeColor(button) {
//     button.setAttribute("style", { "color": "green" })
// }

// // .value vs .innerHTML
// const hello = document.getElementById("hi")
// const input = document.getElementById("input")

// window.addEventListener("load", function () {
//     hello.innerHTML = "hello"
//     input.value = 1
// })













