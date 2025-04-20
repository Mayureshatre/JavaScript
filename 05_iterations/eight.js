const myNums = [1, 2, 3, 4, 5, 6, 7]

// const myTotal = myNums.reduce( function(accumalator, currentvalue){
//     console.log(`acc: ${accumalator} and currvalue: ${currentvalue}`);

//     return accumalator+currentvalue
// },0)

const myTotal = myNums.reduce((accumalator, currentvalue) => {
    return accumalator + currentvalue
}, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemname: "JS course",
        price: 2999
    },

    {
        itemname: "PY course",
        price: 999
    },
    {
        itemname: "JAVA course",
        price: 7999
    },
    {
        itemname: "DSA course",
        price: 5999
    },
]
const PriceToPay = shoppingCart.reduce(  (acc,item) => {return acc+item.price},0)
console.log(PriceToPay);
