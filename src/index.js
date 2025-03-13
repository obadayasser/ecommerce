import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sign from './Pages/Sign';
import Login from './Pages/Login';
import { ToastContainer } from 'react-toastify';
import Story from './Pages/Story';
import Profile from './Pages/Profile';
import ShoppinProvider from './Context/ShoppingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppinProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/story" element={<Story />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </Router>
    </ShoppinProvider>
  </React.StrictMode>
);
