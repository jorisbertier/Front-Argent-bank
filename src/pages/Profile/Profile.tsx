import React from 'react';
import '../../index.css';
import '../../App.css'
import { useSelector } from 'react-redux';
import AccountCard from '../../components/AccountCard.tsx';

function Profile() {

  const userData = useSelector((state) => state.user.userData);
  // const token = useSelector((state) => state.auth.token);
  let storage = localStorage.getItem("token");
  console.log(storage)
  return (
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{userData?.firstName} {userData?.lastName}!</h1>
          <button className="edit-button">Edit Name</button>
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