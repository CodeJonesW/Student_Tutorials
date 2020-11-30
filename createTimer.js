// // this is for coding quiz exercise. creating a timer

// var currentTime = 300


// function startTimer() {
//     setInterval(function () {
//         decreaseOneSecondInTime()
//     }, 1000);
// }

// function decreaseOneSecondInTime() {
//     // currentTime = currentTime - 1
//     currentTime -= 1
//     console.log(currentTime)
// }

// startTimer()



let htmlElement = document.getElementById("timer")

let time = 100

// every second we want to increase the timer by 1

function increaseTime() {
    // time = time + 1
    time--

    let functionScope = "will"

    if (time === 0) {
        let ifScope = 'hello'
        clearInterval(timer)

    }
    console.log()
}

// setInterval(increaseTime, 1000)

let timer = setInterval(function () {
    console.log(time)
    increaseTime()
    htmlElement.innerHTML = time
}, 1000)



