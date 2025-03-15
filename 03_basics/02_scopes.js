//var c =300
let a = 300
if(true){
    let a = 10
    const b =20
    console.log("inner:",a);
    
} 
console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "mayuresh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "mayuresh"
    if(username != undefined){
        const website = " youtube"
        console.log(username + website)        
    }
    // console.log(website);
}
// console.log(username);
//+++++++++++++++++++++ Interesting+++++++++++++++++++++


console.log(addOne(5));

function addOne(num){// funtion when declared normally it can be executed from anywhere in the program
    return num+1;
}

const addTwo = function(num){// it can only executed by the code written after the function 
    return num+2;
}
console.log(addTwo(5));