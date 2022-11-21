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

