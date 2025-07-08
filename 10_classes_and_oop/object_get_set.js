const User = {
    

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value;
    },

    _email: "user@gmail.com",
    _password: "123abc"
}

const yeda = Object.create(User)
// console.log(yeda._email); // undefined, because _email is not set
console.log(yeda.email); 
