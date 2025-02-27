//objects can be declared in two ways one in literal form and second in constructor form 
//to declare in constructor form syntax is 
//object.create

//object literals
const mySym = Symbol("Key1")

const jsUser = {
    Name: "Mayuresh",
    "Full Name": "Mayuresh Atre",
    [mySym]: "myKey1",// to declare a symbol in object square brackets are used if they are declared without brackets then datatype will be string only.
    Age: 18,
    Location: "Burhanpur",
    email: "mayureshatre5@gmail.com",
    isloggedin: false,
    lastloggedin: ["Monday", "Saturday"]
} 
console.log(jsUser.Name);
//console.log(jsUser."Full Name"); // "Full Name" cannot be accesed by dot 
console.log(jsUser["Name"]);// should be written in original string form 
console.log(jsUser["Full Name"]);// "Full Nmae" can only be accesed by []

jsUser.email = "atremayuresh51@gmail.com";
// Object.freeze(jsUser);// it locks the value written in object
jsUser["Full Name"] = "Mayuresh Sunil Atre";
console.log(jsUser["Full Name"])

jsUser.greeting = function(){
    console.log(`Hello JS user.`);
}
jsUser.greetingAgain = function(){
    console.log(`Hello JS user, ${this.Name}`);
}
console.log(jsUser.greeting);// it refers to the function 
console.log(jsUser.greeting());// it executes the function
console.log(jsUser.greetingAgain());
