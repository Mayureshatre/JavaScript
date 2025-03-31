// for of loop

let MyArray = [1, 2, 3, 4, 5, 6]

for (const num of MyArray) {
    console.log(num);
}

let greetings = "Hello World!"
for (const greet of greetings) {
    if(greet == " "){
        continue
    }
    console.log(`each char is ${greet}`);
    
}
//maps this are same as objects but are known for holding unique key value pairs and in the same order as you write 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
// console.log(map)

for (const [key, value] of map) { //syntax for writing key value pairs in normal form otherwise it will give output in array of key value pairs 
    console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Genshin Impact',
    'game3': 'Wuthering Waves'
}
// for (const [key, value] of myObject) {  // object is not iterable by for of loop it has other ways 
//     console.log(key, ':-', value);
    
// }