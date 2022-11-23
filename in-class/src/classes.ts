class User {
    users: object[] = [];
    id: string;
    username: string;
    password: string;
    constructor(id: string, username: string, password: string) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

const user1=new User ('1', 'user2020', 'password1')
console.log(user1)

