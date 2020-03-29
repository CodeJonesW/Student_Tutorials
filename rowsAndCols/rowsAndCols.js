let button = document.getElementById("clickButton")
let meter = document.getElementById("meterId")


button.addEventListener("click", function () {
    if (meter.value === 10) {
        meter.value = 0
        console.log("understanding reset")
    } else {
        meter.value = meter.value + 1
        console.log("understanding increased")
    }
})