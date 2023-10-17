const name = "naveen"
const score = 40

//console.log(name + score + " value");  // old method outdated

console.log(`Hello my name is ${name} and my score is ${score}`);
// this is called string interpolation (modern)

const gameName = new String('Clash-Royale-2')

console.log(gameName[4])

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,5) // character at 5th index wont be included
console.log(newString);

const newString2 = gameName.slice(-1,0)
console.log(newString2);

const temp = "     30     "  
console.log(temp.trim());   // removes the whitespace characters

const url = "https://naveen.com/naveen%20pattihal"
console.log(url.replace('%20','_'))

console.log(gameName.split('-')); // creates an array after splitting
