function setUsername(username){
    //complex db calls
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password  = password
}

const user1 = new createUser("chai", "chai@gmail.com", "12345")
console.log(user1);

