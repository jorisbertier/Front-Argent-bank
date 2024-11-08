import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
// import App from './App';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Index from './components/Index.tsx';
import SignIn from './pages/SignIn.tsx';
import NavBar from './components/NavBar.tsx';
import Footer from './components/Footer.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

