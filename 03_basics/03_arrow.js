const user = {
    username : "naveen",
    price : 999,
    welcmsg : function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }
}
// user.welcmsg()
// user.username = "sammy"
// user.welcmsg()

// console.log(this);

// function chai(){
//     username : "naveen",
//     console.log(this.username);       // this doesnt work for functions
// }

// chai ()

// const chai = () => {
//     username = "naveen"
//     console.log(this.username);    // this doesnt work for arrow functions as well
 
// }


// const addTwo = (num1 , num2) => {   // basic arrow function
//          console.log(num1 + num2)
// }

const addTwo = (num1 , num2) => (num1 + num2)    // implicit function


console.log(addTwo(4,5))