import React from 'react';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignUp/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
