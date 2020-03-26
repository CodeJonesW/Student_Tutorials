let button = document.getElementById("clickButton")
let meter = document.getElementById("disk_c")


button.addEventListener("click", function () {
    if (meter.value === 10) {
        meter.value = 0
        console.log("happiness reset")
    } else {
        meter.value = meter.value + 1
        console.log("happiness increased")
    }
})