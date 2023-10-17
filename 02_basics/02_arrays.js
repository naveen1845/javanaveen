const marvel_heroes = ["spiderman", "Ironman", "thor"]
const dc_heroes = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes)  // adds a array within a array as a element
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]) // **not a good practice

const all_heroes = marvel_heroes.concat(dc_heroes)  // limitation only 2 arrays
// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]  // this is called spread => more than 2 arrays le sakte
// console.log(all_new_heroes);


const another_array = [1,2,3,[2,6,7,[4,5,7,8]],8]
const real_array = another_array.flat(Infinity)  // to eleminate arrays within a array
// console.log(real_array);

// console.log(Array.isArray("naveen"));
// console.log(Array.from("naveen"));      // to convert a non array into array

score1 = 100
score2 = 300
score3 = 500
console.log(Array.of(score1,score2,score3));
