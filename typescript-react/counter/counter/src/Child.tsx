import { Agent } from 'https';
import React, { FC } from 'react'



type Props={
    name:string;
    age:number;
    country:string;
}

// const Child = ({name, age, country}:Props) => {
//   return (
//     <div>{name} {age} {country}</div>
//   )
// }



// or:

const Child:FC<Props>=({name, age, country})=>{
    return (
        <div>{name} {age} {country}</div>
      )
    }
    
export default Child