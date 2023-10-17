const myarray = [1,2,3,4,5,6,7,8]
const myarray2 = ["singham","simba","suryavanshi"]

const myarray3 = new Array(6,7,8,8,6,5,4)
 //console.log(myarray);
// console.log(myarray[0]);

// myarray.push(4,3,3)  // to add new element in the array
// myarray.pop()  // to remove the last element of the array (no parameters)
// console.log(myarray);

myarray.unshift(10)  // to add a new element at the start
myarray.shift()  //  to remove the first element of the array (no parameters)
// console.log(myarray);

// console.log(myarray.indexOf(10));  
// console.log(myarray.includes(10));  // if element doesnt exist => -1

const newArr = myarray.join()  // to convert the array to string and join all the elemnets
// console.log(myarray)
// console.log(newArr)



// slice and splice

// console.log("A", myarray);

// const myn1 = myarray.slice(1,4)  
// console.log("B", myarray);
// console.log(myn1);

// const myn2 = myarray.splice(1,4)  // removes this portion from the array and manipulates the original array
// console.log("C", myarray);
// console.log(myn2);