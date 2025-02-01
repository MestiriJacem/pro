import React ,{createContext,useState,useEffect} from 'react'

// create auth conext
export const AuthContext=createContext()

export const AuthProvider =({children})=>{
    const [user,setUser]=useState(null);
    //check for existing user in local storage
    useEffect(()=>{
        const storedUser =localStorage.getItem('user')
        if (storedUser){
            setUser(JSON.parse(storedUser));
        }
    },[])
//login function
const login =(email)=>{
    setUser({email});
    localStorage.setItem('user',JSON.stringify({email}))
};
//logout 
const logout =()=>{
    setUser(null);
    localStorage.removeItem('user')
}
return (
    <AuthContext.Provider value ={{user,login,logout}}>
      {children}
    </AuthContext.Provider>
)


}
