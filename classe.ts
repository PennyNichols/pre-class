// classes, interfaces, objects

class Person {

// declare a class which is simply syntactic sugar for creating constructor function and prototypal inheritance
    
    id;
    firstName;
    lastName;
  
    constructor(id, firstName, lastName) {
      this.id= id;
      this.firstName = firstName;
      this.lastName = lastName;
    }
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }


  class Person {

// class adds type annotations to the properties and methods of the class

    id: number;
    firstName: string;
    lastName: string;
  
    constructor(id: number, firstName: string, lastName: string) {
      this.id= id;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  class Person {

// the type annotation is optional, but will be an implicit any if not specified. Fields can also have initializers; these will run automatically when the class is instantiated:


    id = 1;
    firstName = "Mark";
    lastName = "Maddison"
  }
  const mark = new Person();
  mark.id = "2";
  // Type 'string' is not assignable to type 'number'.


  class Base {

// if you have a base class, you’ll need to call super(); in your constructor body before using any this. members

    k = 4;
  }
   
  class Derived extends Base {
    constructor() {
      // Prints a wrong value in ES5; throws exception in ES6
      console.log(this.k);
  'super' must be called before accessing 'this' in the constructor of a derived class.
      super();
    }
  }


  class Employee {

// If you don’t specify any access modifier for properties and methods, they will take the public modifier by default

    public id: string;
    name: string;
}

let emp = new Employee();
emp.id= 1;
emp.name= "Mark";


class Person {

// private access modifier ensures that class members are visible only to that class and are not accessible outside the containing class

    private id: number;
    private firstName: string;
    private lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
}


class Employee {

// Read-only members can be accessed outside the class, but their value cannot be changed. 

// initialized at

// In the property declaration.
// In the constructor of the same class.


    readonly id: string;
    name: string;
    readonly department: string = "Sales"; // initialized at declaration
    
    constructor(id: string, name: string)     {
        this.id = code;
        this.name = name;
    }
}
let emp = new Employee(10, "John");
emp.id = 20; //Compiler Error
emp.name = 'Sally'; 


class Person {

// parameter properties and are created by prefixing a constructor argument with one of the visibility modifiers public, private, protected, or readonly. The resulting field gets those modifier(s):

// No code is necessary for declaration of class members

    constructor(
        private firstName: string,
        private lastName: string,
        private readonly id: string) {
    }
}
let mark = new Person("Mark", "Madison", "5");
console.log(mark);

// interfaces

// without interface:

function getFullName(person: {
    firstName: string;
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(person));


// with interface

interface IPerson {
    firstName: string;
    lastName: string;
}
function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName}`;
}
let john = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(john));

// Passed parameter may have other properties, only requirement is it should comply with Person interface

let jane = {
    firstName: 'Jane',
    middleName: 'K.'
    lastName: 'Doe',
    age: 22
 };
 let fullName = getFullName(jane);
 console.log(fullName); // Jane Doe


// define properties and methods inside interfaces, but interfaces cannot contain implementation code. The implementation code should be written in implementing class

 interface IPerson {
    firstName: string;
    lastName: string;
    getFullName(): string;
}
class Person implements IPerson {
    constructor(public firstName, public lastName){}
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let p1 = new Person("Mark", "Maddison");
console.log(p1.getFullName());


// A class can implement more than one interface, but can extend only one parent class. Same extend rule applies to interfaces as well.

interface IEditable {
    // edit logic declaration
}
interface IDraggable {
    // drag logic declaration
}
class Item implements IEditable, IDraggable, ISomeOther {
    // implementation code for all of the interfaces declared after implements keyword
}

// function types with interfaces

// To describe a function type, you assign the interface to the function signature that contains the parameter list with types and returned types

interface StringFormat {
    (str: string, isUpper: boolean): string
}
let format: StringFormat;
format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('hi', true));


// Extending Interfaces

interface IPerson {
    name: string;
    gender: string;
    readonly SSN: number; // this property cannot be changed after initialization
}
interface IEmployee extends IPerson {
    id: number;
    department?: string; // this property is optional
}
let person1: IEmployee = {
    id:1,
    SSN: 11234567,
    name:"Mark",
    gender:"Male"
    // department is not a mandatory field, we can skip it
}
person1.SSN = 32382322; // compiler error


// To describe a function type, you assign the interface to the function signature that contains the parameter list with types and returned types

interface StringFormat {
    (str: string, isUpper: boolean): string
}

// inheritance

// Classes may extend from a base class. A derived class has all the properties and methods of its base class, and also define additional members.
class Animal {
    move() {
      console.log("Moving along!");
    }
}
class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d = new Dog();
// Base / Super / Parent class method
d.move();
// Derived / Sub / Child class method
d.woof(3);


// Interface can extends interfaces or classes as well.

class Person {
    name: string;
}
interface IEmployee extends Person { 
    id: number;
}
let emp: IEmployee = { id: 1, name: "Barry Mitchell" }


// Overriding Methods

// When a child class defines its own implementation of a method from the parent class, it is called method overriding. 


class Base {
    greet() {
      console.log("Hello, world!");
    }
  }
  class Derived extends Base {
    greet(name?: string) {
      if (name === undefined) {
        super.greet();
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
  }
  const d = new Derived();
  d.greet();
  d.greet("reader")


//   it’s very common (and always legal!) to refer to a derived class instance through a base class reference:

// Alias the derived instance through a base class reference
const b: Base = d;
// No problem
b.greet();


//Overriding Example of Cars:

class Car {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    drive(speed:number = 0) {
        console.log(`A ${this.name} is going at ${speed} kph!`);
    }
}


class Mercedes extends Car {
    

    constructor(name: string) {
        super(name);
    }
    
    drive(speed = 200) {
        console.log(`${this.name} engine started`);
        super.drive(speed);
    }

}

class Honda extends Car {
    constructor(name: string) {
        super(name);
    }
    drive(speed = 150) {
        console.log('A Honda started')
        super.drive(speed);
    }
}
let mercObj = new Mercedes("Mercedes-Benz GLA");
let hondaObj = new Honda("Honda City")
mercObj.drive(); 
// Mercedes-Benz GLA engine started A Mercedes-Benz GLA is going at 200 kph!
hondaObj.drive();
// A Honda started A Honda City is going at 150 kph!
