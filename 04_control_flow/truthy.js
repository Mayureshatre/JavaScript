// const UserEmail = "mayureshatre5@gmail.com"
// const UserEmail = ""
const UserEmail = []

if (UserEmail) {
    console.log("Got user email.");
} else {
    console.log("user email doesn't found");
}

// Falsy values
// false, 0, -0, Bigint 0n, "", null, undefined, NaN

// Truthy values
// '0', "false", " ", [], {}, function(){}

// if(UserEmail.length===0){
//     console.log("array is empty");
// }

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
    
}


// Nullish coalescing Operator ??


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 20


console.log(val1);

// Terniary operator
// condition ? true:false

const IceTeaPrice = 100

IceTeaPrice >120 ? console.log("price is greater than 120") : console.log("price is less than 120");


