// Primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outSideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 432545252452452543252345n

// Non Primitive OR Reference 
// Array , Object, Function
const herox = ["Thor", "Ironman", "Spiderman"]
let myObj = {
    name: "Niraj",
    age: 22,
}

const myFunction = function (){
    console.log("Hello World")
}

console.log(typeof bigNumber);


