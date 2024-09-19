import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  let [counter, setCounter] = useState(5);
  
  const increase = () =>{
    if(counter < 20){
      setCounter(counter+1);
    }
  }
  const decrease = () =>{
    if(counter > 0){
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h1>counter: {counter}</h1>
      <button onClick={increase}>increase</button><br />
      <button onClick={decrease}>decrease</button>
      <h3>{counter}</h3>
      <p>{counter}</p>
    </>
  )
}

export default App
