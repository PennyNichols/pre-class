"use strict";
class User {
    constructor(id, username, password) {
        this.users = [];
        this.id = id;
        this.username = username;
        this.password = password;
    }
}
const user1 = new User('1', 'user2020', 'password1');
console.log(user1);
user1.username = 'user456';
