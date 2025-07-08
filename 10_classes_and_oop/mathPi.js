console.log(Math.PI)
// you cannot overwrite the value of pi

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

const chai = {
    name: "Chai",
    price: "250",
    isAvailable: true,

    orderChai : function(){
        console.log("chai nahi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "price"))

// Object.defineProperty(chai, "price", {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "price"))

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        
        console.log(`${key} : ${value}`)
    }
}
