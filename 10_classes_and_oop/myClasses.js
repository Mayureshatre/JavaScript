// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const user1 = new User("Jhon", "Jhon@gmail.com", "123")

console.log(user1.encryptPassword());
console.log(user1.changeUsername());


//Behind the scenes

function user(username, email, password){
    this.username = username;
        this.email = email;
        this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const user2 = new user("Don", "Don@gmail.com", "123")

console.log(user2.encryptPassword());
console.log(user2.changeUsername());
