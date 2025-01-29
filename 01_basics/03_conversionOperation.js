//let score = "21abc"; value= NaN
//let score = null;  value= 0
//let score = true; value= 1 for true and 0 for false
//let score = undefined;  value= Nan
let score = "mayuresh"; //value= NaN

console.log(typeof(score));
console.log(typeof score);

let value = Number(score);

console.log(typeof value);

console.log(value);// NaN - Not a Number

//let isloggedIn = 1;
//let isloggedIn = "";
let isloggedIn = "mayuresh";

let booleanValue = Boolean(isloggedIn);
console.log(isloggedIn);
console.log(booleanValue);

// 1 => true; 0 => false
// "" => false; empty string
//"mayuresh" =>true

let someNumber = 45;

let stringNumber = String(someNumber);

console.log(someNumber);
console.log(typeof stringNumber);


           // operations
let num = 3
let negNum = -num;
console.log(negNum);

// console.log(2+2);addition
// console.log(2-2);subtraction
// console.log(2*2);multlipication
// console.log(2**3);power
// console.log(2/2);divide
// console.log(2%2);modulus

let str1 = "Mayuresh"
let str2 = " Atre"
let str3 = str1+str2

console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log(1+2+"2");
console.log("1"+2+2);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

