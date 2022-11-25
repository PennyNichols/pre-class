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

// class Person {
//     name: string;

//     constructor(name: string){
//         this.name = name;
//     }
//     displayName() {
//         console.log(`name ${this.name}`)
//     }
// }

// class Employee extends Person {
//     empCode: number;
//     constructor(empCode: number, name: string){
//         super(name)
//         this.empCode=empCode
//     }
//     empPrint(): void {
//         console.log(`${this.name} - ${this.empCode}`)
//     }
// }


// const person1 = new Person('mike');
// console.log(person1)


// const emp1 = new Employee(15, 'sally');
// emp1.empPrint()
// emp1.displayName()


// abstract class Vehicle{
//     year: number;
//     color: string;
//     constructor(year: number, color: string){
//         this.year = year;
//         this.color=color;
//     }
//     startEngine():void{
//         console.log(`Engine Started`)
//     }
//     abstract stopEngine():void;
    
// }

// class Car extends Vehicle {
//     model: string;
//     numOfDoors: number;

//     constructor(year: number, color: string, model:string, numOfDoors: number){
//         super(year, color);
//         this.model = model;
//         this.numOfDoors = numOfDoors
//     }

//     stopEngine(): void {
//         console.log('Car Stopped !')
//     }
// }

// const car = new Car(1984,'blue','bmw',4);
// console.log(car.color)
// car.startEngine();


// abstract class User {
    
//     abstract addUser(user: string):void;
//     abstract removeUser(id: string): void;
//     abstract printUsers():void;
// }

// class Admin extends User {
//     users: string[]=[];
    
//     addUser(user: string): void {
//           this.users.push(user)
//     }

//     removeUser(id: string): void {
        
//     }

//     printUsers(): void {
//       console.log(this.users)
//     }
// }

// const admin = new Admin()

// admin.addUser('john')
// admin.printUsers();

