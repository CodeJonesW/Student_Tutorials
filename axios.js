const axios = require("axios")

let term = process.argv[2]

axios.get(`http://api.urbandictionary.com/v0/define?term=${term}`).then(function (data) {
    console.log(data)
})