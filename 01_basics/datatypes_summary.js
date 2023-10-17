//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//****************************************


// stack (primitive), heap (non-primitive)


// stack => copy
let name1 = "naveen"
let name2 = name1

name2 = "ronaldo"

console.log(name1,"   ", name2)


// heap => reference
let user1={
    email:"gg@gmail.com",
    upi:"gg@ybl"

}

let user2 = user1

user2.email = "vk@gmail.com"

console.log(user1.email,"   ",user2.email);