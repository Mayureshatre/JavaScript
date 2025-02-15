let name = "mayuresh"
let age = 18
 
// console.log(name + " is" + age); old way no uses it

console.log(`${name} is ${age} year old. `)

//declaration of string
const gamename = new String("Genshin Impact")
console.log(gamename);
console.log(gamename.length);
console.log(gamename.toUpperCase());// original value in gamename does not change because it is stored in stack memory!!
console.log(gamename.charAt(5));
console.log(gamename.indexOf('i'));

const newstring = gamename.substring(-7,6) // it convert negative value into zero
console.log(newstring);

const anotherstring = gamename.slice(-8, 6) // negative value can be inserted
console.log(anotherstring);

const stringOne = "   mayuresh    " 

console.log(stringOne);
console.log(stringOne.trim());
// console.log(stringOne.trimStart()); mdn document 
// console.log(stringOne.trimEnd());

const url = "https://mayuresh.com/mayuresh%20atre"

console.log(url.replace('%20', '-'))// it does not change it permanently!!!

console.log(url.includes('mayuresh'));// to check something is present in string or not.

console.log(gamename.split(' '));// to split the string on basis of anything


