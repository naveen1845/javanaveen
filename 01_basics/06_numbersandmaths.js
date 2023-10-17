const score = 4000
console.log(score);

const points = new Number (200)
console.log(points);

console.log(points.toString().length)
console.log(score.toFixed(2))

const decimal = 234.7685
console.log(decimal.toPrecision(5));

const amount = 10000000
console.log(amount.toLocaleString('en-IN'));


//***********************maths************************

console.log(Math);
console.log(Math.abs(-4))  //pos => pos   neg=> pos
console.log(Math.round(2.6))
console.log(Math.ceil(2.6))
console.log(Math.floor(2.6))
console.log(Math.min(2,3,2,4,1,6,7))

console.log(Math.random());  // random value between 0-1
console.log((Math.random()*10) + 1); // +1 to avoid 0
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20
console.log(Math.round(Math.random() * (max - min)) + min)