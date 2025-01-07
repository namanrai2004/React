import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
     <h1 className='text-red-500 bg-slate-400 rounded-lg'>Tailwind test</h1>
      <Card />
      <Card Username = 'Naman rai' btnName =  "click me"/>
       
    </>
  )
}

export default App
