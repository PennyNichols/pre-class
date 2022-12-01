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
//         console.log(`Name ${this.name} - code ${this.empCode}`)
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

// class Person {
//     // public name: string;
//     // private age: number;
//     constructor(public name: string, private age: number){
//         this.name = name;
//         this.age = age;
//     }
//     getAge(): number{
//         return this.age;
//     }
//     setAge(newAge: number){
//         if (newAge > 0 && newAge <= 100) {
//             this.age = newAge
//         } else {
//             throw new Error('Invalid Age Value')
//         }
//     }
// }

// const mike = new Person ('mike', 36);

// // console.log(mike.age)    wont work!! Private!

// console.log(mike.getAge())
// mike.setAge(8)
// console.log(mike.getAge())

// class Employee {
//     constructor(private empCode: number, public empName: string){
//         this.empCode = empCode;
//         this.empName= empName;
//     }
// }

// class Department {
//     constructor(public id: number, public dept: string, protected numOfEmpl: number){
//     }
// }

// class Accounting extends Department {
//     constructor(public id: number, public numOfEmpl: number){
//         super(id, 'accounting', numOfEmpl)
//     }
//     printNumOfEmpl(): void {
//         console.log(this.numOfEmpl)
//     }
// }

// const dept = new Accounting(1, 10)

// dept.printNumOfEmpl()


// class User {
//     constructor(public username: string, public readonly password: string){

//     }
// }

// const user = new User('user2020', '1223345');
// console.log(user.password)
// user.password = '12434'  /// read only!
// let password: string = user.password;
// password = '323453'
// user.username ='penny';

// class Product {
//     products: string[] = [];
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//     static listProducts(){
//         console.log(" this is product listing");
//     }
// }

// Product.listProducts();

// const tv = new Product('tv')

// class Circle {
//     constructor(public radius: number){}
//     get diameter(){
//         return this.radius*2
//     }
//     set diameter(d:number){
//         this.radius = Math.floor(d/2)
//     }
// }

// let c1 = new Circle(5)
// console.log(c1.diameter)
// c1.diameter = 20
// console.log(c1.radius)

interface Person {
    name: string
}

type bolOrStr = string | boolean

const person: Person = {name: 'penny'}
const isMarried: bolOrStr = true;