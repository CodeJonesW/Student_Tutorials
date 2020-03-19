const inquirer = require("inquirer")
const fs = require("fs")


let data = {
    info: "stuff"
}

fs.writeFile("data.js", data, function () {
    console.log(Success)
})

inquirer.prompt([
    {
        type: "input",
        message: "whats your name",
        name: "firstName"
    }
])


