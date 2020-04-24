let myPromise = new Promise((resolve, reject) => {
    let myName = "Bob"
    if (myName === "Will") {
        resolve("The names matched")
    } else {
        reject("Failed the names do not match")
    }
})


myPromise.then((res) => {
    console.log("Winner: " + res)
}).catch((err) => {
    console.log('Catch: ' + err)
})