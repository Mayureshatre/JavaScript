const marvel_heroes = ["ironman", "spiderman", "thor"]
const dc_heroes = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes)// changes the existing array
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// const new_array = marvel_heroes.concat(dc_heroes) // returns a new array
//  console.log(new_array);

//spred operator which can be used to connect two more arrays
// const all_heroes = [...dc_heroes, ...marvel_heroes]
//  console.log(all_heroes);

// const garbage_array = [1, 2, 3, 4, [5, 6, 7], 8, 9, [1, 2, 3, [4, 5, 6]]]
// const another_array = garbage_array.flat(Infinity)
// console.log(another_array);

console.log(Array.isArray("Mayuresh"));
console.log(Array.from("Mayuresh"));
console.log(Array.of("Mayuresh"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

