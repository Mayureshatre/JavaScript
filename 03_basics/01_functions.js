
function sayMyName(){
    console.log("Mayuresh");
    
}

sayMyName()

// function addNum(num1, num2){// parameters are value that are declared in function
//     console.log(num1+num2);
    
// }
function addNum(num1, num2){
    // let result = num1+ num2;
    // return result;
    return num1+num2;
}
const result = addNum(5, 8);//arguments are passed when a function is called

console.log(result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a valid username!!");
        return ;
    }
    return `${username} just logged in.`
}
console.log(loginUserMessage("Mayuresh"));

function calculateCartPrice (...num1){// ... is a rest operator!!
    return num1
}
console.log(calculateCartPrice(200, 5000, 400));

const user = {
    username: "mayuresh",
    price: 200
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
}
handleObject(user)
handleObject({
    username: "Mohan",
    price: 500
})

const myArray = [100, 200, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([100, 1000, 500, 600]));
