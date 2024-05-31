
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    displayInfo() {
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
}

module.exports = User;
