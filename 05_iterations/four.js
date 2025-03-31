const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);
    
}

// const myArray = [1, 2, 3, 4, 5, 6]
 const myArray = ["flash", "superman", "ironman", "batman"]

for (const key in myArray) {
    // console.log(key)
    console.log(`${key} :- ${myArray[key]}`);
    
}