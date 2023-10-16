let score = null

console.log(typeof score)

let ValueInNumber= Number(score)  //converts the calue stored in a variable to number 

console.log(typeof ValueInNumber);

console.log(ValueInNumber)

// "33" => 33
// "33anc" => NaN
// null => 0
// true => 1   false => 0

let IsLoggedIn = 1

let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true  0 => false
// "" => true  "naveen" => true
// 25 => true

// **************operations*************

let value = 3
let negvalue = - value
console.log(negvalue)

let str1= "hello"
let str2 = " naveen"
let str3 = str1 + str2
console.log(str3);