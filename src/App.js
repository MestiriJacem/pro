import { Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import './styles/App.css';
import About from './pages/About';
import Home from './pages/Home';
import React from 'react';

function App() {
  return (
    <div className="app-container">
      <Header title ="Task Manager"/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
      <ToastContainer autoClose={2000}/>
    </div>
  );
}

export default App;
