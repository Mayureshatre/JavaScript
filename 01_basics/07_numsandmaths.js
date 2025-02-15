const score = 400
const balance = new Number(100000)

console.log(score);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernumber = 65.24698
const num = 165.24698

console.log(othernumber.toPrecision(3));
console.log(num.toPrecision(3));

const hundreds = 1000000;

console.log(hundreds.toLocaleString('en-IN'));// itconverts the number in indian readable format!!

//*****************************************Maths************************************* */

console.log(Math.abs(-7));// change negative value into absolute positive value
console.log(Math.round(4.9));// automatically round off to nearest integer
console.log(Math.round(4.2));
console.log(Math.ceil(4.2));// round off too nearest uppper integer
console.log(Math.floor(4.7));// round off too nearest lower integer
console.log(Math.min(4, 3, 5, 8, 9, 7));// tells the minimum number in the array
console.log(Math.max(4, 3, 5, 8, 9, 7));// tell the max number in array

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 100

console.log(Math.floor(Math.random()*(max - min + 1)) + min);



