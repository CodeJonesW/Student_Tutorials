

// For Loops have 3 parameters
// 1st parameter
// - variable intended to change on every iteration of the loop
// 2nd parameter
// - if this condition is true continue to the next iteration of the loop
// 3rd parameter
// - how to manipulate the defined variable on each iteration of the loop



let listOfPets = ['cat', 'dog', 'fish', 'bird', 'alligator', 'monkey']

// for (let i = 0; i < listOfPets.length; i++) {
// here we use our i variable to access the array indexes 0 - 5)
// console.log(i, listOfPets[i])

// if (listOfPets[i] === "fish") {
//     console.log("fishy")
// } else {
//     console.log("No fish")
// }
// }


// let numbers = [1, 2, 3, 4, 5, 6, 7]
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }



function animalDemo(nameOfAnimal) {
    //              ^ paramenter
    console.log("My pet cat's name is " + nameOfAnimal)
    //               
}

animalDemo("Era")
//           ^ argument