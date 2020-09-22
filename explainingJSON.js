// JSON - stands for - JavaScript Object Notation.

// JSON is a syntax for storing and exchanging data.

// JSON is text, written with JavaScript object notation.

// JSON is a lightweight data-interchange format

// When exchanging data between a browser and a server, the data can only be text.

// JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.

// We can also convert any JSON received from the server into JavaScript objects.

// This way we can work with the data as JavaScript objects, with no complicated parsing and translations.

// Sending Data
// If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server:

var myProfleObj1 = { name: "William", age: 28, country: "USA" }
var myJSON1 = JSON.stringify(myProfleObj1);
// console.log("this is what JSON looks like: " + myJSON1)

// Recieving Data
// If you receive data in JSON format, you can convert it into a JavaScript object:

var myJSON2 = '{"name":"William", "age":28, "country":"USA"}';
var myProfileObj2 = JSON.parse(myJSON2);
console.log("This is my newly converted object: ", myProfileObj2)




// In JSON, values must be one of the following data types:

// a string
// a number
// an object (JSON object)
// an array
// a boolean
// null
// JSON values cannot be one of the following data types:

// a function
// a date
// undefined

// Strings in JSON must be written in double quotes.




let myArray = [1, 2, 3, 4, 5, 6]


