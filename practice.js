// data types
// in terminal use node *filename to run file to test with console.log()
// strings, booleans, arrays, objects, integers, floats

var string1 = "this is a string!"
var string2 = 'this is also a string!'

// double quotes cannot go inside single quotes
var string3 = "this is a 'quote'"

// console.log(string1 + string2)

var newString = `this is a string using interpolation to reference a variable like ${string3}`

// console.log(newString)

// Arrays

var pets = ['cat', 'dog', 'bird']

// access array index
// console.log(pets[2])

// adds to end of the array
pets.push('alligator')



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
userProfile1.happy

// bracket notation
userProfile1['email']

// console.log(userProfile1.favoriteFoods)


// array of objects
var array = [{ key1: 1, key2: 2 }, { key2: 2 }, { key3: 3 }]
console.log(array[0].key2)




// write a function to increase age
function userBirthday(user) {
    // user.age = user.age + 1
    user.age += 1
    return user
}

// using the function and passing it the userProfile1 object
// console.log(userBirthday(userProfile1))



// this is just javscript 
// const button = document.getElementById("myButton")

// button.addEventListener("click", userBirthday(userProfile1))

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



