// data types
// in terminal use node *filename to run file to test with console.log()
// strings, booleans, arrays, objects, integers, floats

var string1 = "this is a string!"
var string2 = ' this is also a string!'

// double quotes cannot go inside single quotes
var string3 = "this is a 'a famous quote'"

// console.log(string1 + string2)

var newString = `this is a string using interpolation to reference a variable like ${string3}`
// console.log(newString)

let pet = 'cat'
let sentence = `my favorite pet is a ${pet}`
// console.log(sentence)

// Arrays

var pets = ['cat', 'dog', 'bird', 1, 2, 3]

// access array index
pets[5]
// adds to end of the array
var newPets = pets.push('alligator')
// console.log(pets)



// integers are whole numbers  1 , 2 , 3 , 123
// floats are non whole numbers 0.983637 or 1.28373


//Objects
// object keys are actually strings if you analyze the data type
// objects are not ordered numerically

// objects are 


let userProfile1 = {
    name: "Will",
    email: "willjones@email.com",
    location: "USA",
    age: 27,
    favoriteFoods: ['pizza', 'curry', 'icecream'],
    isHappy: true
}
// Dot notation
// console.log(userProfile1.name)

// bracket notation
userProfile1['location']

let africa = "location"
userProfile1.location
// console.log(userProfile1[africa])

// console.log(userProfile1.favoriteFoods[0])


// array of objects
var array = [{ pet1: 'cat', pet2: 'bird' }, { pet1: 'giraffe' }, { pet1: 'dog' }]
// console.log(array[1].pet1)


// arrays in arrays
let tricky = [[1, 2], [3, 4], [5, 6]]
console.log(tricky[3][1])


// write a function to increase age
function giveUserABirthday(userObject) {
    userProfile1.age = userObject.age += 1
    // console.log(userProfile1)
}

function changeEmail(userProfile, email) {
    userProfile.email = email
}

changeEmail(userProfile1, "newEmail@email.com")



// unction and passing it the userProfile1 object
giveUserABirthday(userProfile1)
console.log(userProfile1.age)



// this is just javscript 
// const button1 = document.getElementById("myButton")
// const ageHTML = document.getElementById("ageHTMLElement")

button1.addEventListener("click", function(e) {
    console.log(e)
    giveUserABirthday(userProfile1)
    ageHTML.innerHTML = userProfile1.age
})

// this is jquery
$("myButton").click(function () {
    giveUserABirthday(userProfile1)
})

// $("myButton").hover(function () {
//     changeColor()
// })


// function changeColor() {
//     $("myButton").addClass("colorGreen")
// }













// let vs const
// use let when you intend to redefine variable and const for when you do not intend it to change.



