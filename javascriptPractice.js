// Data types


// in terminal use node *filename to run file to test with console.log()
// strings, booleans, arrays, objects, integers, floats


var string1 = "this is a string!"
var string2 = 'this is also a string!'






// double quotes cannot go inside single quotes
var string3 = "this is a 'a famous quote'"


var pet = 'cat'

var sentence = `my favorite pet is a ${string3}`


// console.log(sentence)


// Arrays
// arrays are like lists. Arrays can be filled with any data type.
var pets = ['cat', 'dog', 'bird', 1, 2, 3]
// console.log(pets[3])
// access array index
// pets[0]



// lots array methods available. learn as you grow
// Array.push() method
// adds an index to the end of an array
pets.push('alligator')

// console.log(pets)

var myNumber = 1

// integers are whole numbers  1 , 2 , 3 , 123
// floats are non whole numbers 0.983637 or 1.28373


// Booleans

var loggedIn = false

var value1 = true
var value2 = false



// console.log(value1)

// ES6 variable declaration (alternative to var)
// let vs const
// use let when you intend to redefine variable and const for when you do not intend it to change.




//Objects
// object keys are actually strings if you analyze the data type
// objects are not ordered numerically
// objects are made up of key value pairs


let userProfile1 = {
    name: "William",
    email: "willjones@email.com",
    location: "USA",
    age: 28,
    favoriteFoods: ['pizza', 'curry', 'icecream'],
    isHappy: true,
    instruments: {
        guitars: ["esp", "fender"],
        keyboards: "native Instruments"
    }
}

var newUser = {
    name: "Shelly",
    email: "shelly@gmail.com",
    location: "california",
    age: 26,
    isHappy: true
}





// console.log(myArray)

// Dot notation
// console.log("This is the value", userProfile1.favoriteFoods[2], "this is the array", userProfile1.favoriteFoods)

// bracket notation
// console.log(userProfile1['location'])
// console.log(userProfile1.location)

let exampleVariable = "location"

// userProfile1.exampleVariable  <<< wont work 

// console.log(userProfile1[exampleVariable])
// <<< works will read value of variable as the string

// userProfile1.exampleVariable

// console.log(userProfile1.favoriteFoods[0])


// array of objects
var arrayOfObjects = [
    { pet1: 'cat', pet2: 'monkey' },
    { pet1: 'giraffe', pet2: 'alligator' },
    { pet1: 'dog', pet2: 'squirrel' }
]

// console.log(arrayOfObjects[1].pet2)


arrayOfObjects[2].pet1 = "newSnake"

// console.log(arrayOfObjects)

arrayOfObjects.push({ pet1: "newPet" })
// console.log(array)


// arrays in arrays
var tricky = [[1, 2], [3, 4], [5, 6]]






function simpleFunction() {
    console.log("Hello Coders")
}

// simpleFunction()



function slightyComplicated(nameString) {
    console.log("Hello " + nameString)
}

// slightyComplicated("Sally")

// ES6 function
const slightlyHardToRead = () => { console.log("hi") }






// write a function to increase age
function giveUserABirthday(userObject) {
    userObject.age = userObject.age + 1
    // userObject.age += 1
    console.log(userObject)
}

// giveUserABirthday(newUser)


function changeEmail(userObject, emailInputString) {
    userObject.email = emailInputString
    console.log(userObject)
}

changeEmail(userProfile1, "newEmail@email.com")



function addFiveToANumber(numberInput) {
    console.log(numberInput + 5)
}
// addFiveToANumber(20)




// this is just javscript 
var button1 = document.getElementById("myButton")
var ageHTML = document.getElementById("ageHTMLElement")


button1.addEventListener("click", function (e) {
    // console.log(e)
    // console.log(button1)
    // console.log(ageHTML)
    giveUserABirthday(userProfile1)
    ageHTML.innerHTML = userProfile1.age
})



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
// const submitBtn = document.getElementById("submitBtn")

// submitBtn.addEventListener("click", function () {
//     console.log(input.value)
//     hello.innerHTML = input.value
// })













