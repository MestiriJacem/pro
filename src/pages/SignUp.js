import React,{useState,useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


function SignUp(){
    const {login}=useContext(AuthContext)
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate =useNavigate();
    const handleSignUp =(e)=>{
        e.preventDefault()  ;
        login(email);
        navigate('/') 
     };
     return(
        <div className="auth-container">
            <h2>Sign up</h2>
            <form onSubmit={handleSignUp}>
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                <button type="submit">Sign up</button>
            </form>
            <p>Already have an account ? <a href="/login"></a>Login</p>
        </div>
     )
}