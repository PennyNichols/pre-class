// built in

// const names: string[]=[];
// const names: Array<any> = [];
// const names: Array<string> = [];
// names[0].

const promise: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('this promise is resolved')
    }, 100)
})

promise.then(data =>
    data.split(' ')
    ).catch()