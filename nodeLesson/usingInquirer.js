var inquirer = require("inquirer")

inquirer.prompt([
    {
        type: 'confirm',
        message: "Do you like iceCream?",
        name: "iceCream"
    }
]).then(function (data) {
    if (data.iceCream === true) {
        console.log("I love iceCream")
    } else {
        console.log("Veggies?")
    }
})