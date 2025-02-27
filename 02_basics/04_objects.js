// const tinderUser = new Object() --> singleton object 
const tinderUser = {}  // --> non singleton object

tinderUser.Id = "123abc"
tinderUser.Name = "Sam"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUSer = {
    email: "someone@gmail.com",
    fullNmae: {
        firstName: "Mayuresh",
        lastName: "Atre"
    },
    age: 18
}
console.log(regularUSer.fullNmae.firstName);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {
    5: "e",
    6:"f"
}
// const obj4 = { obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3) // the first object act as a target object for all objects

const obj4  = {...obj1, ...obj2, ...obj3}
console.log(obj4);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
const {courseInstructor: instructor} = course

console.log(course.courseInstructor);
console.log(instructor);

// jason
// {
//     "name": "mayuresh",
//     "course": "JS in hindi"
// }