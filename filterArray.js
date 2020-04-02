const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

const result = words.filter(word => thisIsMyCallBackFunction(word))


function thisIsMyCallBackFunction(word) {
    if (word.length > 6) {
        console.log("I run after the initial function and this is my..... " + word)
    }

}