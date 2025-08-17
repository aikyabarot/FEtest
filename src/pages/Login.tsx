import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('recruiter');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('role', role);
    switch (role) {
      case 'recruiter':
        navigate('/recruiter');
        break;
      case 'manager':
        navigate('/manager');
        break;
      case 'admin':
        navigate('/admin');
        break;
      case 'accountManager':
        navigate('/account-manager');
        break;
      case 'technicalManager':
        navigate('/technical-manager');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login as Role</h1>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="p-2 rounded border mb-4"
      >
        <option value="recruiter">Recruiter</option>
        <option value="manager">Manager</option>
        <option value="admin">Admin</option>
        <option value="accountManager">Account Manager</option>
        <option value="technicalManager">Technical Manager</option>
      </select>
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
};

export default Login;
