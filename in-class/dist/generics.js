"use strict";
// built in
// const names: string[]=[];
// const names: Array<any> = [];
// const names: Array<string> = [];
// names[0].
// const promise: Promise<string> = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('this promise is resolved')
//     }, 100)
// })
// promise.then(data =>
//     data.split(' ')
//     ).catch()
// function getArray(items: any[]): any[]{
//     return new Array().concat(items)
// }
// let numArr = getArray([1,2,3])
// let strArr = getArray(['john', 'jane'])
// numArr.push(4)
// strArr.push('Jake')
// numArr.push('Tim')
// strArr.push(5)
// console.log(numArr)
// console.log(strArr)
// function getArr<T>(items: T[]): T[]{  //<--- keeps types within array the same 
//     return new Array().concat(items);
// }
// let numArr = getArr([1,2,3])
// let strArr = getArr(['john', 'jane'])
// strArr.push(3);
// numArr.push('mike');
// let obj = getArr([{name: 'mike'}, {name: 'John'}])
function log(num) {
    console.log(`type ${typeof num}`);
}
log(45);
