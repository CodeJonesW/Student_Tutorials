// lets create an applicaton based on Object Oriented Programming Principles

// when we think about the applications design in how we handle data we need a plan.

// in our application we will know what data we need to store by the type and processes of our application

// an example would be a restraunt lookup app

// we will want our users to be able to create user accounts

// therefore we should plan to have a user object model 

// when have a sequelize model defined you an create a new instance of that model by saying

// let sampleUser = build User("exampleemail", "exampeleuserName", "2")

// this is the result of creating a new sequelize model >>
// let sampleUser = {
//     email: "exampleemail",
//     userName: "exampeleuserName",
//     favoriteNumber: 2
// }

// so in order to store our data handled by our models we need to store that data in a database. we define this information in our schema.sql

// CREATE DATABASE IF NOT EXISTS sample_db;
// USE sample_db;

// in order to store in a database we need to create tables to match our models that we created for our application

// -- Create the User table
// CREATE TABLE User (
//     id int NOT NULL AUTO_INCREMENT,
//     userName varchar(255) NOT NULL,
//     email BOOL DEFAULT false,
//     favoriteNumber int NOT NULL
//     PRIMARY KEY (id)
// );

// inside of our tables we need to create columns that match the keys of our objects we defined in our models. here we did that inside the creation of the User table above. Our column names are id, userName, email, and favoriteNumber.

// we now need to think about what other types of data objects we need to store for our application. repeat this process for each object model/table you plan on using in your application.

// in our example application we will need to create restraunt object model and db table

// in my head i think a restraunt will need the keys id, location, name, cuisineCategory, menu, rating

// let sampleRestraunt = new Restraunt("Atl", "PizzaBois", "Pizza", ['cheesePizza', "spaghetti", "peperonniPizza"], 5 )

// once you have all your models defined and you have defined your database. We now need to perform the appropriate model actions inside of our routes 

// create a file called controller and think about this as the puppeteer of data handling for your application.

// in the controller we will define our routes which will use our
// models to acquire data from the database and then render the data object into a view

// for example here we define a route that returns all the Users
// app.get("api/users", function () {
    // here use the appropriate method call to find all the instances of that model in our database. the method call name varies pending the ORM you are using. in sequealize it is 
    // return User.findAll()
// })

// now do this for all the routes you will need. generally CRUD

// now you can make data requests from the front end using Javascript
// create an HTML
// link it to a Javascript file
// grab html element via the document and save as a variable
// create an event listener for that said variable
// inside event listener make an api call to the route you created on the backend. This can be done with ajax or the built in fetch function. Note that you must run your server via node in order to recieve a response from your route.

// With your new response data render new information in your DOM
// by updating the value of HTMl elements
// this is done by setting the innerHTML, innerText, value, etc (depends on type of element) to the newly acquired information from your database.

// now you have an app!

// M - Model = our sequelize models we created
// V - View = we created an HTML page to display our information / alternatively create handlebars setup to render returned data to the dom via templates
// C - Controller = controller file we created storing our routes

// how we think about the view can change depending on the 
// different technologies we are using. Here we use the simple
// HTMl file for our view but templating engines, erb files in
// Rails, or components in react.

// you can now use this logic to store a information and create functioning applications to help solve problems!

// Now use css to make it pretty
