import React,{useState,useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


function SignUp(){
    const {login}=useContext(AuthContext)
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate =useNavigate();
    const handleLogin =(e)=>{
        e.preventDefault();
        login(email);
        navigate('/')
    }
    return(
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                <button type="submit">Login</button>
            </form>
            <p>don't have an account? ? <a href="/Signup"></a>Login</p>
        </div>

    )


}