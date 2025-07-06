


const myHeroes  = ["thor" , "spiderman"]

const heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpidermanPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.Mayuresh = function(){
    console.log(`Mayuresh is present in all objects.`)
}

Array.prototype.heyMayuresh = function(){
    console.log(` Mayuresh says hello`)
}

// heroPower.Mayuresh()
// myHeroes.Mayuresh()
// myHeroes.heyMayuresh()
// heroPower.heyMayuresh()

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

const anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True lenght of string is: ${this.trim().length}`)
}
anotherUsername.trueLength()