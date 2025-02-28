import React from 'react';
import Home from './components/Home';
import Register from './components/Signup';
import Admin from './components/Admin';
import Login from './components/Login';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <nav className='nav'>
        <ul>
          <div className='left-side'>
          <li>
            <Link   to="/">Home</Link>
          </li>
          </div>
          <div className='right-side'>
          <li>
            <Link to="/register">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          </div>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
