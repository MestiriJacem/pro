import { Link, Navigate, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import './styles/App.css';
import About from './pages/About';
import Home from './pages/Home';
import SignUp from'./pages/SignUp'
import Login from'./pages/Login'
import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const {user,logout}=useContext(AuthContext)
  return (
    <div className="app-container">
      <Header title ="Task Manager"/>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        {!user?(
          <>
          | <Link to ="/login">Login</Link> | <Link to='/signUp'>Signup</Link>
          </>
        ):(
          <button onClick={logout} className='logout-btn'> Logout</button>
        )

        }
      </nav>
      <Routes>
        <Route path='/' element={user ? <Home/>:<Navigate to="/login"/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path ='/signUp' element={<SignUp/>}></Route>
        <Route path ='/login' element={<Login/>}></Route>

      </Routes>
      <ToastContainer autoClose={2000}/>
    </div>
  );
}

export default App;
