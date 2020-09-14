// returns an array of command line arguments
// console.log(process.argv);

// arguments passed from the command line are accessed by index
// console.log("Hello ", process.argv[2]);

var a = process.argv[2];
var b = process.argv[3];

// using a conditional statement
// if (a === b) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//using a ternary operator
// console.log(a === b ? "The inputs are equal" : "Inequal")

// comparing variables
// console.log(a === b);

// comparing argument values directly
// console.log(process.argv[2] === process.argv[3]);




// fs is a Node standard library package for reading and writing files
var fs = require("fs");

// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
// fs.readFile("./log.txt", "utf8", function (error, data) {

//     if (error) {
//         return console.log(error);
//     }

//     console.log(data);

// });


// fs.writeFile("log.txt", process.argv[2], function (err) {

//     if (err) {
//         return console.log(err);
//     }

//     console.log("Success!");

// });






// var inquirer = require("inquirer");

// inquirer.prompt([
//     {
//         type: "input",
//         message: "What is your user name?",
//         name: "username"
//     },
//     {
//         type: "password",
//         message: "What is your password?",
//         name: "password"
//     },
//     {
//         type: "password",
//         message: "Re-enter password to confirm:",
//         name: "confirm"
//     }
// ])
//     .then(function (response) {

//         if (response.confirm === response.password) {
//             console.log("Success!");
//         }
//         else {
//             console.log("You forgot your password already?!");
//         }
//     });



let object = {
    new: "hi"
}

let another = {
    hello: "asdf"
}

let newObject = {
    myInfo: { ...object, ...another },
}

// console.log(newObject)



