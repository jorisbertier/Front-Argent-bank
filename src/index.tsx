import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Index from './components/Index.tsx';
import SignIn from './pages/SignIn.tsx';
import NavBar from './components/NavBar.tsx';
import Footer from './components/Footer.tsx';
import User from './pages/User.tsx';
import { Provider } from 'react-redux';
import store from './app/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);

