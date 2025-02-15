import React, { useContext } from 'react'


import {ThemeContext} from '../context/ThemeContext'

function Header ({title}){
    const {darkMode,setDarkMode}=useContext(ThemeContext)
  return (
    <header className="header" >
   <h1> {title}</h1>
   
    <button className='dark-mode-toggle'onClick={()=>setDarkMode(!darkMode)}>
       
        {darkMode ? "🌞":"🌙 "}

    </button>

   
    </header>
  )
}

export default Header
