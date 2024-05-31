
const User = require('./users');

class Auth {
    static register(username, email) {
        const newUser = new User(username, email);
        console.log(`${username} is registered successfully!`);
        return newUser;
    }

    static login(username, password) {
        // Перевірка логіна та пароля (для прикладу)
        console.log(`${username} is logged in!`);
    }
}

module.exports = Auth;
