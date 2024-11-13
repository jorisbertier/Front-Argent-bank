import React, { useEffect } from 'react';
import '../../index.css';
import '../../App.css'
import { useSelector } from 'react-redux';
import AccountCard from '../../components/AccountCard.tsx';
import { Link, useNavigate } from 'react-router-dom';

function Profile() {

  const isConnected = useSelector((state) => state.auth.isConnected);
  const navigate = useNavigate();

  const userData = useSelector((state) => state.user.userData);
  // const token = useSelector((state) => state.auth.token);
  let storage = localStorage.getItem("token");
  console.log(userData)
  console.log(typeof userData)
  

  // useEffect(() => {
  //   if (isConnected === false) {
  //     navigate('/signIn');
  //   }
  // }, [isConnected, navigate]);
  return (
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{userData?.firstName} {userData?.lastName}!</h1>
          <Link className="edit-button" to='/editProfile'>Edit Name</Link>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <AccountCard
          title={"Argent Bank Checking (x8349)"}
          amount={'$2,082.79'}
        />
        <AccountCard
          title={"Argent Bank Savings (x6712)"}
          amount={'$10,928.42'}
        />
        <AccountCard
          title={"Argent Bank Credit Card (x8349)"}
          amount={'$2,082.79'}
        />
      </main>
  )
}

export default Profile