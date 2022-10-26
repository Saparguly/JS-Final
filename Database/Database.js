let users = [];
class User {
    constructor(name, email, phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class Database {
    static addUser(name, email, phone){
        users.push(new User(name, email, phone));
    }
}
module.exports = Database;