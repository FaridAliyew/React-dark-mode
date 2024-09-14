import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style/style.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Navbar from './components/Navbar';
import About from './components/About';
import ContactUs from './components/ContactUs';
import { DarkModeProvider } from './components/DarkModeContext';
import './i18next';

function App() {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="/profile" element={<><Navbar /><Profile /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/contact-us" element={<><Navbar /><ContactUs /></>} />
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
