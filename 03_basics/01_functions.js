function sayMyName(){
    console.log("N");
    console.log("a");
    console.log("v");
    console.log("e");
    console.log("e");
    console.log("n");
}

// sayMyName()

function addtwo (number1 , number2){     // parameters
//    result = number1 + number2
   return number1 + number2
   console.log("naveen");   // unreachable code. after return nothing will be executed
}

const ans = addtwo("3",4)  // argumemts
// console.log(ans);

function loginUserMsg(username = "ella"){    // default user name. If nothing is entered "ella" will be default
    if(username === undefined){
        console.log("pls enter a username");
        
    }
    else
    return `${username} just logged in `
}

const msg = loginUserMsg("naveen") 
// console.log(msg);


function calculateCartPrice(...num1){       // ... => rest operator
    return num1

}

// console.log(calculateCartPrice(200,334,566,360));

// passing object to a function
const user={
    name : "naveen",
    age : 18
      
}

function handleObject(obj){
    console.log(`username is ${obj.name} and age is ${obj.age}`);
}

// handleObject(user)
// handleObject({name : "ritik", age: 18})

const myArr = [200,300,266,166]

function ReturnSecValue(getArray){
    return getArray[1]
}

// console.log(ReturnSecValue(myArr));
// console.log(ReturnSecValue([200,600,288,111]))