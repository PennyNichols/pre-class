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


//type assertions

let someValue: unknown = "this is a string";
console.log(someValue.length) //Object is of type 'unknown'


// angle bracket syntax !!! cannot use in react

let someValue: unknown = "this is a string";
console.log((<string>someValue).length) // 16

// as syntax

let someValue: unknown = "this is a string";
console.log((someValue as string).length) // 16


// named functions

function add(a: number, b: number): number {
    return a + b;
}

// anonymous function

let fnName = function (x: number, y: number): number {
    return x + y;
}

// function parameters

function welcome(message: string, name: string ) : string {
    return `${message} ${name}!`;
}

welcome('Hello','Matthew');
welcome('Hi'); // Compiler Error: Expected 2 arguments, but got 1.
welcome('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.
welcome('Hello',1); // Argument of type 'number' is not assignable to parameter of type 'string'.



// using an objects value formatting as a prototype for structure of new objects:

type myObj={
    name: string;
    age: number;
    flag: boolean;
}

let newObj:myObj={name:'john', age:20, flag: true}
let newObj2:myObj={name:'penny', age:30, flag: false}


// arrays

let newArray:string[];   // everything in array is string
newArray=['hello', 'hi', '10', '40', 'true'];



// arrays with multiple types

let hybrid: any[]    // can put any type for everything in array

hybrid=['hello', 10, false]


// array in object


type prod={
    id:string;
    price: number;
    tags:string[],
    details:{
        title:string;
        description:string;
    }
}

const product:prod = {
    id: '123',
    price: 123.32,
    tags: ['discount', 'great-offer'],
    details: {
        title: 'red ribbon',
        description: 'great gift for the holidays',
    }
}

// type: unknown - can take any type, the type is initially unknown



// void - if your function is not returning anything:

function warnUser() : void {
    console.log('this is a warning')
}

// void is also used for setting state:

const handleclick=():void=>{
    setState(false)
    setFlag(true)
}


// combine types:

type Combinable = number | string | boolean;
function addTwo(input:Combinable, input2:number){
    return typeof input === 'number' ? input+input2 : input+input2.toString()
}


// more parameters

// function withMoreParams(num1:number, num2:number, ...params:string[]){
//     return num1+num2+Number(params)
// }
// console.log(withMoreParams(10,20,'20','30'))

function withMoreParams(num1:number, num2:number, ...params:any[]){
    return params.join(',')
}
console.log(withMoreParams(10,20,'20',20, false))