import { useState } from 'react'
import './App.css'
import DarkLight from './components/DarkLight'
import { ThemeProvider } from './components/DarkThemeContext'

function App() {


  return (
    <>
    <ThemeProvider>
         <DarkLight/>
    </ThemeProvider>
        
    </>
  )
}

export default App
