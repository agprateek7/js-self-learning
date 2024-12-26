// Primitive
// 7 types: Number, String, Boolean, null, undefined, Symbol, BigInt

// javascripts is dynamically type

const id = Symbol('123')
const anotherId = Symbol('123')
const id2 = '123'
const anotherid2 = '123'

// console.log(id === anotherId)
// console.log(id == anotherId)

// console.log(id2 === anotherid2)


//Reference Type(Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]  

let myObj = {
    name: "Prateek",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World")
}

//console.log(typeof(myFunction))

