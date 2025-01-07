import React, { useContext } from 'react'
import { ThemeContext } from './DarkThemeContext'

const DarkLight = () => {
    const {theme, handleToggleTheme} = useContext(ThemeContext)
  return (
    <>
    <div className={`${theme==="dark"? "bg-black text-white": "bg-white text-black" }`}>
    <h1>Dark mode Webiste</h1>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi error ut ipsam amet! Necessitatibus esse mollitia delectus et perspiciatis dolor cupiditate. Culpa, sit.</p>

    <button onClick={handleToggleTheme}>
        {theme=== "dark"? "Light": "Dark"}
        </button>
    </div>
    </>
  )
}

export default DarkLight    