import React, { useEffect } from 'react';
import ArgentLogo from '../assets/images/argentBankLogo.png';
import Account from '../assets/images/argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../redux/actions/signout.actions';

function NavBar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isConnected = useSelector((state) => state.auth.isConnected);
  const userData = useSelector((state) => state.user.userData)
  console.log('page navbar', userData)

  useEffect(() => {
    console.log("userData dans NavBar :", userData);
  }, [userData])

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
        <div className="main-nav-item-connected">
          <div className="main-nav-info">
            <i className="fa fa-user-circle"></i>
            <h3>{userData.firstName}</h3>
          </div>
          <button onClick={() => handleLogout()}>Sign out</button>
        </div>
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