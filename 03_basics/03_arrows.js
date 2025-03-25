const user = {
    userName: "mayuresh",
    price: "499",
    welcome: function(){
        console.log(`${this.userName} , Welcome to the website. `);
        console.log(this);
        
    }
}
// user.welcome()
// user.userName = "sam";
// user.welcome()

// console.log(this);

// function chai(){
//     let userName = "mayuresh"
//     console.log(this.userName);// this only works in objects otherwise it will give undefined
//     // console.log(this);
// }
// chai()

// const chai = function(){
//     let userName = "mayuresh"
//     console.log(this.userName);
// }
const chai = ()=>{//arrow function
    let userName = "mayuresh"
    console.log(this.userName);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2;
// }
// const addTwo = (num1, num2) =>  num1+num2;     //aisa bhi chalta hai curly braces ke sath return aata he hai


// const addTwo = (num1, num2) =>  (num1+num2);    
const addTwo = (num1, num2) =>  ({userName: "mayuresh"});    

console.log(addTwo(3,4));
