// for in 

const myobj = {
    js : "java",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by appple"
}

for(const key in myobj){
    // console.log(key, '---->' ,myobj[key]);
}


myarr = [200,100,400]

for(const key in myarr){
    // console.log(myarr[key]);
}



const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United states of america')
map.set('FR', 'France')
map.set('IN', 'India')

// console.log(map);

for (const [key, value] in map){      // map is not iterable using the for in loop
    // console.log(key,"===>",value);
}

