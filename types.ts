// Type : unknown

let unknownVar: unknown;
unknownVar = false; // boolean
unknownVar = 15; // number
unknownVar = "Hello World"; // String
unknownVar = ["1" , "2" , "3" , "4" , "5"] // Array
unknownVar = { userName: 'admin' , password: '123x' }; // Object
unknownVar = null; // null
unknownVar = undefined; // undefined

// cannot assign unknown to any other type

let value: unknown; // no error

let newValue1: boolean = value; // Error
let newValue2: number = value; // Error
let newValue3: string value; // Error
let newValue4: object = value; // Error
let newValue5: any[] = value; // Error
let newValue6: Function = value; // Error

// Type : void

function sayHi(): void { 
    console.log('Hi!')
} 

let greet: void = sayHi(); 
console.log(greet); //Output: undefined

// Type : never

function throwError(errorMsg: string): never {
    throw new Error("Error has occurred");
  }

//   Difference between never and void

let something: void = null;
let nothing: never = null;
// Error : Type ' null ' is not assignable to type ' never '