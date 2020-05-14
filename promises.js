// promises are how we handle asychronous javascript code
// synchronous = linear
// asychronous = multiple threads

// create promise
// - this means the computer is promising your a return of some
// data in the future
// since computers are super fast all this happens in milliseconds
// some time later data is returned and promise is fulfilled
// if there was an error promise rejects with associated message


let myPromise = new Promise((resolve, reject) => {
    let myName = "Bob"
    if (myName === "Will") {
        resolve("The names matched")
    } else {
        reject("Failed the names do not match")
    }
})

// we can use .then to control asychronous functions from continuing until the 
// promise is resolved.

myPromise.then((res) => {
    console.log("Winner: " + res)
}).catch((err) => {
    console.log('Catch: ' + err)
})


// Async functions always return a promise. If the return value of an async
// function is not explicitly a promise, it will be implicitly wrapped in a promise.

// For example, the following:

async function name() {
   return 1
}
// ...is equivalent to the synchronous (because Promise executor functions run synchronously):

function name2() {
   return Promise.resolve(1)
}



function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

// Code after each await expression can be thought of as existing in a .then 
// callback. In this way a promise chain is implicitly constructed, with the
// return value the final link in the chain. 

  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
  }
  
  asyncCall();
  


  // example of traditional fs readfile method
const fs = require('fs');

    fs.readFile('./index.js', 'utf8', (err, text) => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log(text);
    }
});

// example of promisified fs readfile method

// const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
readFile('./index.js', 'utf8')
    .then((text) => {
        console.log(text);
    })
    .catch((err) => {
        console.log('Error', err);
    });

    