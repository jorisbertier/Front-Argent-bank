import React from 'react';
import ArgentLogo from '../assets/images/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';

function NavBar() {

  const isConnected = useSelector((state) => state.auth.isConnected)

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
        <div>Account</div>
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