// import Navbar from './components/Navbar';
import React from 'react';
import Signup from './components/auth/Signup';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Navbar} />
        <Route exact path='/signup' Component={Signup} />
        <Route exact path='/login' Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
