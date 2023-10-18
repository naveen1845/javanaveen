// singleton
// constructor method => singleton
// eg->   object.create

// object literals => non singleton

const mysym = Symbol("ronald")

const JsUser = {
    name : "Naveen",
    [mysym] : "donald",  // to use a symbol as symbol put square brackets or else it will be treated as a string
    age : 18,
    email : "naveen@exploder.com",
    IsLoggedIn : false,
    lastLoginDays : ["Monday","saturday"]
}

// console.log(JsUser.lastLoginDays);
// console.table([JsUser.name,JsUser.age,JsUser.email,JsUser.IsLoggedIn]);
// not a good method to use. Use square notation instead.

// console.log(JsUser["email"])  
JsUser.email = "naveen@chatgpt.com"  // to change a value of the object

// Object.freeze(JsUser)  // to freeze the object so that further changes wont be propogated
JsUser.email = "naveen@microsoft.com"
// console.log(JsUser);

// creating function in objects

JsUser.greeting = function(){
    console.log("hello JS user Namaskar");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// note: moslty u will use the dot operator to access the info
// only for special cases use the square brackets coz there is no other option