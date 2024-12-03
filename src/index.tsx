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
import ProtectedRoute from './components/ProtectedRoute.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));


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
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
              </ProtectedRoute>
            }
          />
        <Route
          path="/editProfile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
          />
      </Routes>
      <Footer />
    </>
  );
}

// const Profile = () => {
//   return <h2>Home (Protected: authenticated user required)</h2>;
// };


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);