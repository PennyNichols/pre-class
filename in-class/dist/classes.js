"use strict";
// class User {
//     users: object[] = [];
//     id: string;
//     username: string;
//     password: string;
//     constructor(id: string, username: string, password: string) {
//         this.id = id;
//         this.username = username;
//         this.password = password;
//     }
// }
// const user1=new User ('1', 'user2020', 'password1')
// console.log(user1)
class Person {
    constructor(name) {
        this.name = name;
    }
    displayName() {
        console.log(`name ${this.name}`);
    }
}
class Employee extends Person {
    constructor(empCode, name) {
        super(name);
        this.empCode = empCode;
    }
    empPrint() {
        console.log(`${this.name} - ${this.empCode}`);
    }
}
const person1 = new Person('mike');
console.log(person1);
const emp1 = new Employee(15, 'sally');
emp1.empPrint();
emp1.displayName();
