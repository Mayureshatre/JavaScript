let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleString());
console.log(mydate.toTimeString());

console.log(typeof mydate);// date is a object

//let myCreatedDate = new Date (2025, 11, 25) // month starts from 0
// let myCreatedDate = new Date("2025-12-25")
let myCreatedDate = new Date("01-26-2025")
console.log(myCreatedDate.toDateString());

let myTimeStamp =  Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());// day is also given in numbers starting from 1

console.log(`Todays day and date is ${myCreatedDate} , respectively.`);
//date can be customised according to our needs!!
console.log(newDate.toLocaleString('default', {
    //weekday: "long",
    dateStyle: "full"
}));

