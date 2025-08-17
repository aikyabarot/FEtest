import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import RecruiterDashboard from './pages/RecruiterDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AccountManagerDashboard from './pages/AccountManagerDashboard';
import TechnicalManagerDashboard from './pages/TechnicalManagerDashboard';

const App = () => {
  const role = localStorage.getItem('role');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recruiter" element={role === 'recruiter' ? <RecruiterDashboard /> : <Navigate to="/" />} />
        <Route path="/manager" element={role === 'manager' ? <ManagerDashboard /> : <Navigate to="/" />} />
        <Route path="/admin" element={role === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} />
        <Route path="/account-manager" element={role === 'accountManager' ? <AccountManagerDashboard /> : <Navigate to="/" />} />
        <Route path="/technical-manager" element={role === 'technicalManager' ? <TechnicalManagerDashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
