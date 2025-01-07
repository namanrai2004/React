import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

function App() {
  const reducer = (state, action)  =>{
    console.log(state);
    console.log(action);

    if(action.type==='INCREMENT')return state+1
    if(action.type==='DECREMENT') return state-1
    if(action.type=== 'RESET') return state = 0
  }
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer,0)

  return (
    <>
     <h1>{state}</h1>
     <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
     <button  onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
     <button  onClick={() => dispatch({type: "RESET"})}>Reset</button>
    </>
  )
}

export default App
