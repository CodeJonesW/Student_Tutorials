$(document).ready(function () {
    let storedEmail = document.getElementById("emailInput")
    if (localStorage.email) {
        storedEmail.innerHTML = localStorage.email
    }

    $("#greatphoto").on('click', function (event) {
        console.log(event)


        let pTag = document.createElement('p')
        pTag.innerHTML = "This is the text"


        $("#photoDiv").append(pTag)
        $("#submit").on('click', grabEmailInput())

    })
})

function grabEmailInput() {
    let email = document.getElementById("emailInput").value
    let string = "This is your email:" + email
    localStorage.setItem('email', string)
}


<form>
    <input id="emailInput" type="text" placeholder="Email"></input>
    <button id="submit">Submit</button>
</form>


// css change with jQuery
$("submit").on("click", function () {
    $("emailInput").css('color', 'red')
})








