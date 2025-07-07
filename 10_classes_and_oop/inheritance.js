class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Logged In:${this.username}`)
    }

}

    class Teacher extends User {
        constructor(username, email, password){
            super(username)
            this.email = email
            this.password = password
        }

        addCourse(){
            console.log(` A new course was added by ${this.username}`);
            
        }
    }

const user1 = new Teacher("Yeda", "yeda@gmail.com", "12345")
const user2 = new User("Yeda2")
user1.addCourse()
user1.logMe()
user2.logMe()
console.log(user1 instanceof User);
