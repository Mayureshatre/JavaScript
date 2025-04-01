const coding = ["js", "java", "python", "ruby", "c++"]

// coding.forEach( function (item){ // a callback function does not have a name!!!
//     console.log(item);
    
// })
// can be written in the form of arrow function
// coding.forEach( (val)=>{
//     console.log(val);
    
// })

// function PrintMe(item){
//     console.log(item);
    
// }
// // function can also be passed in for each loop
// coding.forEach(PrintMe)


// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
    
// } )

const myCoding = [
    {
        languageName: "javasript",
        languagenameFile: "js"
    },

    {
        languageName: "java",
        languagenameFile: "java"
    },

    {
        languageName: "python",
        languagenameFile: "py"
    },

    {
        languageName: "c++",
        languagenameFile: "cpp"
    }
    
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )