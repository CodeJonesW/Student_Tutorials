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

// example HTML DOC
<form>
    <input id="emailInput" type="text" placeholder="Email"></input>
    <button id="submit">Submit Email</button>
</form>




{/* <div>
<button id="answerButton"> answer A</button>
</div> */}

let currentIndex = 0

let questionsArray = [1, 2, 3]


$("answerBtn").on('click', function (event) {
    console.log(event.srcElement.innerHTML)
    if (event.srcElement.innerHTML === answer) {
        console.log('correct')
        // do something with time
        currentQuestion = currentQuestion + 1
        populateHtml()
    } else {
        // incorrect
    }
})


function populateHtml() {
    let questionElement = $("question")
    questionElement.innerHTML = questionsArray[currentQuestion]
}









// css change with jQuery
$("submit").on("click", function () {
    $("emailInput").css('color', 'red')
})

let key = '123'
let city =

    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

    let query = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}`

$.ajax({
    type: "GET",
    url: `example.com/api/user/1&apiKEY=${key}`
}).then(function (data) {
    console.log(data)
})








