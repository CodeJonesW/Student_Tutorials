// The below code fills in the first row of the table
var movie = "Star Wars";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

// create an input html element
// save that element to a variable
// listen for a click on a submit button to search
// when clicked grab the value of the input
// save to a variable
// use that variable to construct query url

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
    // Create a new table row element
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var titleTd = $("<td>").text(response.Title);
    var yearTd = $("<td>").text(response.Year);
    var actorsTd = $("<td>").text(response.Actors);

    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    $("tbody").append(tRow);
});

var movie = "The Little Mermaid";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    var tBody = $("tbody");
    var tRow = $("<tr>");
    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var titleTd = $("<td>").text(response.Title);
    var yearTd = $("<td>").text(response.Year);
    var actorsTd = $("<td>").text(response.Actors);
    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    tBody.append(tRow);
});

var movie = "The Lion King";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    var tBody = $("tbody");
    var tRow = $("<tr>");
    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var titleTd = $("<td>").text(response.Title);
    var yearTd = $("<td>").text(response.Year);
    var actorsTd = $("<td>").text(response.Actors);
    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    tBody.append(tRow);
});


var catUrl = "https://cat-fact.herokuapp.com/facts/random"
$.ajax({
    url: catUrl,
    method: "GET"
}).then(function (response) {
    console.log(response)
});