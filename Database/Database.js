let clients = [];
class Client {
    constructor(name, email, message){
        this.name = name;
        this.email = email;
        this.message = message;
    }
}

class Database {
    static addClient(name, email, message){
        clients.push(new Client(name, email, message));
        console.log(clients);
    }
}
module.exports = Database;