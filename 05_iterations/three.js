// for of 

arr = [1,2,3,4,5,6]

for(const num of arr){
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings){
    // console.log(greet);
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United states of america')
map.set('FR', 'France')
map.set('IN', 'India')

// console.log(map);

for (const [key , value] of map){
    console.log(key , '===>' , value);
}



const myobj = {
    game1 : "NFS",
    game2 : "spiderman"
}

for (const [key , value] of myobj){
    console.log(key, value);             // object is not iterable using for of loop
}