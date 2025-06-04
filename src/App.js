import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterClient from './pages/RegisterClient';
import RegisterTester from './pages/RegisterTester';
import Register from './pages/Register';
import './App.css';
import Login from './pages/Login';
import RecoverAccount from './pages/RecoverAccount';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register-client" element={<RegisterClient />} />
        <Route path="/register-tester" element={<RegisterTester />} />
        <Route path="/register" element={<Register />} />
		<Route path="/login" element={<Login />} />
		<Route path="/reset-password" element={<RecoverAccount />} />
		<Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </Router>
  );
}

export default App;
