import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { BioProvider } from './components/context'
import Service from './components/Service'

function App() {

  return (
    <>  
      <BioProvider>
           <Home/>
           <Service/>
      </BioProvider>
      
      
     
    </>
  )
}

export default App
