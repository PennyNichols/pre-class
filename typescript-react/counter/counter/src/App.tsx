import Counter from './Counter'
import './App.css';
import Child from './Child';

function App() {
  let age:number=20
  const obj={name:'alice', age:20, country:'France'}
  return (
    <div className="App">
      hello happy birthday, {age}
      <Counter data={0} title={'counter'}/>
      <Child {...obj} />
    </div>
  );
}

export default App;
