import Counter from './Counter'
import './App.css';
import Child from './Child';
import { useState } from 'react';

function App() {
  const [inputVal, setI]= useState('')
  let age:number=20
  const obj={name:'alice', age:20, country:'France'}
  return (
    <div className="App">
      hello happy birthday, {age}
      <input placeholder='0' type="number" onChange={(e)=>setI(e.target.value)} />
      <Counter data={inputVal} title={'counter'}/>
      <Child {...obj} />
    </div>
  );
}

export default App;
