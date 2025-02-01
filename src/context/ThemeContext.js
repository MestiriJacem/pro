import { createContext,useState,useEffect } from "react";
//create theme context

export const ThemeContext =createContext();

export const ThemeProvider =({children})=>{
    const [darkMode,setDarkMode]= useState(()=>{
        return localStorage.getItem("darkMode")==="true"   }

    )
    //apply dark mode class
    useEffect(()=>{
        if (darkMode){
            document.body.classList.add("dark-mode");
        }
        else{
            document.body.classList.remove("dark-mode");
        }
        localStorage.setItem ("darkMode",darkMode);
    },[darkMode]);
    return (
        <ThemeContext.Provider value ={{darkMode,setDarkMode}}>
         {children}
        </ThemeContext.Provider>
    )
}