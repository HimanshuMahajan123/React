import { useState } from 'react'
import './App.css'

function App() {

  //this will not change the value in the UI
  // let counter = 15;

  //use state:
  const [counter , setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Understanding react {counter}</h1>
      <h2>Counter value {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button> { }

      <button
      onClick={removeValue}
      >Remove value</button>
      

      <p>footer : {counter}</p>
    </>
  )
}

export default App
