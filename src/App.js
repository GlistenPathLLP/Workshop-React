import './App.css';
import React,{createContext, useState, useMemo, useCallback} from 'react';
import {Child1} from './useContext/child1'
//import { Parent } from './useContext/parent';
//import { StateExample } from './hooks/statesExample';
//import { BindingExample } from './bindingExample';
//import { Controlled } from './controlledUncontrolled/controlled';
//import { UnControlled } from './controlledUncontrolled/unControlled';

//export const AppTheme = createContext() 



function App() {
  const fruits = ["apple", "mango","banana","grapes"];
  const [name, setName] = useState("")
  const [count, setCount] = useState(0)

  const filterFruits = useMemo(() =>  {
    console.log("filtering list")
    return fruits && fruits.filter((el, id)=> el.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
  },[name])
      
  const handleCount = useCallback(() => {
    setCount(count+1)
  },[count]
)
  return(
    <div className='App' style={{marginTop: 30}}>
      <input type='text' value={name} onChange={(ev) => setName(ev.target.value)}/>
      <ol>
        {
          filterFruits.map((el) => <li key={el}>{el}</li> )
        }
      </ol>

      <Child1 counter={count} increment={handleCount}/>
    </div>
  )
}

export default App;
