const accountID = 1234
let accountEmail = "naveenpattihal08@gmail.com"
var accountPassword = "12345"
accountCity= "Jaipur"
let accountState

// accountID=100 // constants cant be changed once assigned

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])