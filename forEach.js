

// a Javascript for each loop accesses each index of an array in ascending order
// and performs the defined operations within the specified function


const students = ["Sam", "Larry", "Kim", "Aiesha", "Susan", "Blake"]
let numOfLoops = 0

students.forEach((student) => {
    console.log(student)
    numOfLoops++
})

console.log("numberOfLoops: ", numOfLoops)