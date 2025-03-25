// Immediately Invoked Function Expressions

(function chai(){
    console.log(`DB Connected`);
})();
// semicolon should be added if two IIFE needed to run
// ()()   global scope ke pollution ko rokne ke liye IIFE ka ise kiya jata hai !!!
// chai()

// (  () => {
//     console.log(`DB Connected Two`);
// } )()
(  (name) => {
    console.log(`DB Connected Two ${name}`);
} )("mayuresh");