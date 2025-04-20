import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterClient from './pages/RegisterClient';
import RegisterTester from './pages/RegisterTester';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/alta-cliente" element={<RegisterClient />} />
        <Route path="/alta-tester" element={<RegisterTester />} />
        <Route path="/crear-cuenta" element={<Register />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </Router>
  );
}

export default App;
