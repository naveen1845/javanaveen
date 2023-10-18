const tinderuser = new Object()

tinderuser.name = "vineet"
tinderuser.age = 18
tinderuser.isLoggedIn = true

// console.log(tinderuser);

const SampleUser = { 
    fullname : {
        userfullname: {
            firstName : "Naveen",
            LastName : "Pattihal"
        }
    }
}          // object within a object.

// console.log(SampleUser.fullname);
// console.log(SampleUser.fullname.userfullname);
// console.log(SampleUser.fullname.userfullname.firstName);

const object1 = {
    1 : "a",
    2 : "b"
}

const object2 = {
    3 : "a",
    4 : "b"
}

// const object3 = {object1,object2}  //{ object1: { '1': 'a', '2': 'b' }, object2: { '3': 'a', '4': 'b' } }
// const object3 = Object.assign({}, object1,object2)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }   using curly braces so that it becomes the target and the remaining parameters are the source
const object3 = {...object1,...object2}   // spreading => moslty use this method
// console.log(object3);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty("isLoggedIn"));