import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("app rendered", Math.random());
  
const [count, setCount] = useState(1)

  const ClickMe = () =>{
    setCount(count+1)
    
}
  

  return (
    <>
      <h1>Main val:{count} </h1>
      <button onClick={ClickMe}>Click me</button>
      {/* <h1>Multiplied Value:{count*5} </h1> */}
      <h1>Multiplied Value: </h1>
    </>
  )
}

export default App
