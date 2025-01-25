import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../styles/Header.css"

function Header ({title}){
    const [darkMode,setDarkMode]=useState(
        localStorage.getItem("darkmode")=== "true"
    )
    useEffect(()=>{
        document.body.classList.toggle("dark-mode",darkMode);
        localStorage.setItem("darkMode",darkMode);
    },[darkMode]);
    // function to toggle dark mode
    const toggleDarkMode= ()=>{
      const newMode =!darkMode;
      setDarkMode(newMode);
      localStorage.setItem("darkMode",newMode)
    }
    //apply dark mode class to body
    useEffect( ()=>{
      if (darkMode){
        document.body.classList.add("dark-mode")

      }
      else {
        document.body.classList.remove("dark-mode")
      }
    },[darkMode]

    )
    // a suivre
  return (
    <header className={`header ${darkMode ? "dark":"light"}`} >
   <h1> {title}</h1>
   <nav className='nav'>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <button className='toggle-btn'onClick={()=> setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode":"🌙 Dark Mode"}

    </button>

   </nav>
    </header>
  )
}

export default Header
