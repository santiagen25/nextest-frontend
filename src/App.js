import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterClient from './pages/RegisterClient';
import RegisterTester from './pages/RegisterTester';
import './App.css';
import Login from './pages/Login';
import RecoverAccount from './pages/RecoverAccount';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import './i18n';
import CreateProject from './pages/CreateProject';
import NotFoundPage from './pages/NotFoundPage';
import ConfigurateProject from './pages/ConfigurateProject';
import AssignProfiles from './pages/AssignProfiles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register-client" element={<RegisterClient />} />
        <Route path="/register-tester" element={<RegisterTester />} />
		<Route path="/login" element={<Login />} />
		<Route path="/reset-password" element={<RecoverAccount />} />
		<Route path="/dashboard-not" element={<Dashboard />} />
		<Route path="/dashboard" element={
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		} />
		<Route path="/create-project" element={<CreateProject />} />
		<Route path="/configurate-project" element={<ConfigurateProject />} />
		<Route path="/assign-profiles" element={<AssignProfiles />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
