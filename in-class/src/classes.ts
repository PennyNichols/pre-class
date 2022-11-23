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
    name: string;

    constructor(name: string){
        this.name = name;
    }
    displayName() {
        console.log(`name ${this.name}`)
    }
}

class Employee extends Person {
    empCode: number;
    constructor(empCode: number, name: string){
        super(name)
        this.empCode=empCode
    }
    empPrint(): void {
        console.log(`${this.name} - ${this.empCode}`)
    }
}


const person1 = new Person('mike');
console.log(person1)


const emp1 = new Employee(15, 'sally');
emp1.empPrint()
emp1.displayName()