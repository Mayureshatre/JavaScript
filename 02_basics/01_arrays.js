const myArr = [1, 2, 3, 4, 5]
const myArr2 = ["mayuresh", "atre"]
const myArr3 = new Array(0, 1, 2, 3, 4, 5)

//console.log(myArr2[1]);

//array methods
// myArr.push(6)
// myArr.push(1)
// myArr.pop()
// myArr.unshift(8)
// myArr.shift()

//console.log(myArr.includes(8));// return in boolean
//console.log(myArr.indexOf(5));

const newArr = myArr.join()

console.log(newArr);//type changes to string 

console.log("A", myArr);

console.log("sliced array", myArr.slice(1,3));

console.log("B", myArr);

console.log("spliced array", myArr.splice(1,3));//splice removes the part from the original array

console.log("C", myArr);


