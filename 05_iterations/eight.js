// Reduce

const myNums = [1,2,3]

const initial = 0
const NewNums = myNums.reduce( (acc,curr) => {
    // console.log(`acc = ${acc} & curr = ${curr}`);
    return acc + curr
}, initial)           // pass the initial accumulator value after the comma
// console.log(NewNums);


// example
const price = [230,450,600,100,250,900,1000]
const total = price.reduce( (sum,curr) => sum + curr , 0)
// console.log(total);


const ShoppingCart = [
   {
        itemName : "js course",
        price : 2999
   },
   {
        itemName : "pyhton",
        price : 999
   },
   {
        itemName : "mobile dev",
        price : 5999
   },
   {
        itemName : "data science course",
        price : 11999
   },
]

const cart_total = ShoppingCart.reduce((acc,curr) => {
     return acc + curr.price
}, 0)

console.log(cart_total);