import React, { useEffect } from 'react';
import ArgentLogo from '../assets/images/argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../redux/actions/signout.actions';

function NavBar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isConnected = useSelector((state: any) => state.auth.isConnected);
  const userData = useSelector((state: any) => state.user.userData)
  console.log('page navbar', userData)

  useEffect(() => {
    console.log("userData dans NavBar :", userData);
  }, [userData])

  // useEffect(() => {
  //   if (!userData) {
  //     navigate('/signIn'); // Exemple : rediriger si userData est vide
  //   }
  // }, [userData, navigate]);

  const handleSignOut = () => {
    dispatch(signOut());
    navigate('/signIn', { replace: true }); 
  };

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
        {isConnected ?
        <Link className="main-nav-item" to="/profile">
          <div className="main-nav-item-connected">
            <div className="main-nav-info">
              <i className="fa fa-user-circle circle-connected"></i>
              <h3 className='main-nav-title'>{userData.firstName}</h3>
            </div>
            <button className='sign-out' onClick={() => handleSignOut()}>Sign out</button>
          </div>
        </Link>
        :
        <div className="main-nav-item-not-connected">
          <i className="fa fa-user-circle"></i>
          <Link className="main-nav-item" to="/signIn">
            Sign In
          </Link>
        </div>
        }
    </nav>
  )
}

export default NavBar