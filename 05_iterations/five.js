// for each 

const coding = ["js","ruby","pyhton","cpp","c"]

// coding.forEach(function (item)
// {console.log(item)}
// )


// coding.forEach( (item)=> {
//   console.log(item);
// })



// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)        // just give reference dont execute


// coding.forEach( (item, index , arr)=>{
//     console.log(item , index , arr);
// })

const mycoding = [
    {languageName : "javascript",
     languageFile : "js"},
    
     {languageName : "java",
     languageFile : "java"},
    
     {languageName : "python",
     languageFile : "py"},
     
]

mycoding.forEach((item) => {
    console.log(item);
})