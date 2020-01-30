// this is for coding quiz exercise. creating a timer

var currentTime = 300


function startTimer() {
    setInterval(function () {
        decreaseOneSecondInTime()
    }, 1000);
}

function decreaseOneSecondInTime() {
    // currentTime = currentTime - 1
    currentTime -= 1
    console.log(currentTime)
}

startTimer()



