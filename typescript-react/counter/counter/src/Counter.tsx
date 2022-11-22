import React, { useState } from 'react'


// can indicate prop types here, or deconstruct them as shown beneath
 type Props={
     title:string;
     data:number;
 }

const Counter = ({title, data}:Props) => {

    const [initialValue, setInitial] = useState(data)

    const handleClick = ()=>{
        setInitial(initialValue+1)
    }

  return (
    <div>
        {title}<br/>
        {initialValue}<br/>
        <button onClick={handleClick}>+</button>
        <button >-</button>
    </div>
  )
}

export default Counter