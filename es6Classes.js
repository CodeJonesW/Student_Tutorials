// create a new constructor for a "class" of objects

class Animal {
    // use constructor to create expected parameters
    constructor(name, type, age) {
        this.name = name,
            this.type = type,
            this.age = age
    }

    // class functions are defined like this and called with dot notation. example on line 19
    introduceYourself() {
        console.log(`My name is ${this.name}, I am a ${this.type} and I am ${this.age} old`)
    }
}

const willsPet = new Animal("Remi", "cat", 7)

// willsPet.introduceYourself()
// console.log(willsPet)

module.exports = Animal