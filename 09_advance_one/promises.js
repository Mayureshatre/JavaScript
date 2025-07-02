const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls, Cryptography, network calls
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("task 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "mayuresh", email: "something@gmail.com" })
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);

})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Mayuresh", password: "12345" })
        } else {
            reject("Error! something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username // this will return the value to another then()
}).then((username) => {
    console.log(username)
}).catch((err) => [
    console.log(err)
]).finally( () => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Javascript", password: "12345" })
        } else {
            reject("Error! JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive (){
   try {
    const response = await promiseFive
    console.log(response)
   } catch (error) {
    console.log(error)
   }
}

consumePromiseFive()

// async function getAllusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//     } catch (error) {
//         console.log("E:", error)
//     }
// }

// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))