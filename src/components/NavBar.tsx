import React, { useState } from 'react';
import ArgentLogo from '../assets/images/argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';

function NavBar() {

  const store = useStore();
  const navigate = useNavigate();
  const isConnected = useSelector((state) => state.auth.isConnected);
  const dispatch = useDispatch();
  console.log(store.getState())

  const handleSubmit = () => {
    store.dispatch({type: 'SIGNOUT_SUCCESS'});
    navigate('/');
  }

  console.log('isConnected', isConnected) 
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={ArgentLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isConnected ?
        <>
          <div>
            <img
              className="main-nav-logo-image"
              src={ArgentLogo}
              alt="Argent Bank Logo"
            />
            <div>Account</div>
          </div>
          <button onClick={() => handleSubmit()}>Sign out</button>
        </>
        :
        <Link className="main-nav-item" to="/signIn">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
        }
      </div>
    </nav>
  )
}

export default NavBar