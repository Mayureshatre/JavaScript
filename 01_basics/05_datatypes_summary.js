// primitive datatypes
// string, number, boolean, null, undefined, symbol, BigInt

// reference (non-primitive datatypes)
// array, objects, functions

// *js has dynamically typed language*

let Id = Symbol('123')
let anotherId = Symbol('123')
// both are still unique
//console.log(Id === anotherId);  false

/* typeof of undefined is undefined
   typeof null is object
   typeof function is objectfunction
   typeof BigInt is undefined
 */


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive) and Heap(non-primitive)

let myname = "mayuresh"
let anothername = myname
anothername = "atre"
console.log(myname);
console.log(anothername);


let userOne = {
  emailId: "userOne@gmail.com",
  upiId: "userone@ybl",
}

let userTwo = userOne;

userTwo.emailId = "usertwo@gmail.com"
userTwo.upiId = "usertwo@ybl"
console.log(userOne);
console.log(userTwo);
