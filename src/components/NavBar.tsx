import React, { useEffect } from 'react';
import ArgentLogo from '../assets/images/argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { signOut } from '../redux/actions/signout.actions';

function NavBar() {

  const store = useStore();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isConnected = useSelector((state) => state.auth.isConnected);
  console.log('page navbar', isConnected)

  useEffect(() => {

  }, [isConnected])
  const handleLogout = () => {
    dispatch(signOut(navigate));
    
  }

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
          <button onClick={() => handleLogout()}>Sign out</button>
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