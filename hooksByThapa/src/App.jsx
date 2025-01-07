import { useState } from 'react'
import './App.css'

function App() {
  const [on, isOn] = useState(true)

  const toggle = () =>{
    isOn(!on)
    
  }

  let btnOn = on ? "on" : "off"
  let styles = {backgroundColor: on? "#4caf50": "f44336"}

  return (
    <>
      <div className="toggle-switch" onClick={toggle} style={styles}>
        <div className= {`switch ${btnOn}`}>
          <span className='switch-state'>{btnOn}</span>
        </div>
      </div>
    </>
  )
}

export default App
