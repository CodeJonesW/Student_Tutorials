// data types
// in terminal use node *filename to run file to test with console.log()
// strings, booleans, arrays, objects, integers, floats

var string1 = "this is a string!"
var string2 = 'this is also a string!'

// double quotes cannot go inside single quotes
var string3 = "this is a 'quote'"

// console.log(string1 + string2)

var newString = `this is a string using interpolation to reference a variable like ${string3}`

let pet = 'cat'
let sentence = `my favorite pet is a ${pet}`
// console.log(newString)

// Arrays

var pets = ['cat', 'dog', 'bird', 1, 2, 3]

// access array index
pets[0]
// adds to end of the array
pets.push('alligator')
// console.log('2', pets)



// integers are whole numbers
// floats are non whole numbers 0.983637 or 1.28373


//Objects
// object keys are actually strings if you analyze the data type
// objects are not ordered numerically



let userProfile1 = {
    email: "willjones@email.com",
    location: "USA",
    age: 27,
    favoriteFoods: ['pizza', 'curry', 'icecream'],
    isHappy: true

}
// Dot notation
// console.log(userProfile1.email)

// bracket notation
userProfile1['email']

// console.log(userProfile1.favoriteFoods[0])


// array of objects
var array = [{ pet1: 'cat', pet2: 'bird' }, { pet2: 'giraffe' }, { pet3: 'dog' }]
// console.log(array[1].pet2)


// arrays in arrays
let tricky = [[1, 2], [3, 4], [5, 6]]
// console.log(tricky[2][0])


// write a function to increase age
function giveUserABirthday(userObj) {
    // userObj.age = userObj.age + 1 
    userObj.age += 1
}


// using the function and passing it the userProfile1 object
// console.log(giveUserABirthday(userProfile1))
// console.log(userProfile1.age)



// this is just javscript 
const button1 = document.getElementById("myButton")

button1.addEventListener("click", function () {
    console.log(userProfile1)
})

// this is jquery
// $("myButton").click(function () {
//     userBirthday(userProfile1)
// })

// $("myButton").hover(function () {
//     changeColor()
// })


// function changeColor() {
//     $("myButton").addClass("colorGreen")
// }













// let vs const
// use let when you intend to redefine variable and const for when you do not intend it to change.



