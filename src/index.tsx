import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Index from './components/Index.tsx';
import SignIn from './pages/Login/SignIn.tsx';
import NavBar from './components/NavBar.tsx';
import Footer from './components/Footer.tsx';
import Profile from './pages/Profile/Profile.tsx';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store.js';
import { loadUserFromStorage } from './redux/actions/token.actions.js';
import EditProfile from './pages/EditProfile/EditProfile.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Composant principal pour charger les informations utilisateur
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);