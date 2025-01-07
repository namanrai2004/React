import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

function App() {
let [counter, setCounter] = useState(0)

const add = () =>{ 
  setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)
}

const remove = () =>{
  setCounter(counter-1)
}

const reset = () =>{
  let count = 0
  setCounter(count)
}

  return (
    <>
      <h1>Counter</h1>
      <h2>Value: {counter}</h2>
      <button onClick={add}>Add</button>
      <br />
      <button onClick={remove}>Remove</button>
      <br />
      <button onClick={reset}>reset</button>

    </>
  )
}

export default App