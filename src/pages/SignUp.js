import React,{useState,useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../styles/Auth.css'
import { registerUser } from "../api";

function SignUp(){
    const {login}=useContext(AuthContext)
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [username,setUsername]=useState("")
    const [error,setError]=useState('')
    const navigate =useNavigate();
    const handleSignUp =async (e)=>{
        e.preventDefault()  ;
        setError("")
        try {
            const {data}= await registerUser({username,email,password});
            localStorage.setItem('token',data.token);
            login(data.userId);//Update context with user Id 7
            navigate ('/');//redirect to home after signup
        }catch (err){
            setError('Signup failed!check your inputs ')

        }
     };
     return(
        <div className="auth-container">
            <h2>Sign up</h2>
            <form onSubmit={handleSignUp}>
            <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} required></input>
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                <button type="submit">Sign up</button>
            </form>
            <p>Already have an account ? <a href="/login"></a>Login</p>
        </div>
     )
}
export default SignUp