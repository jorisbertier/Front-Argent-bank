import React, { useEffect } from 'react';
import '../../index.css';
import '../../App.css'
import { useSelector } from 'react-redux';
import AccountCard from '../../components/AccountCard.tsx';
import { Link, useNavigate } from 'react-router-dom';
import AccountCardData from '../../mock/AccountCardData.json'

function Profile() {

  const isConnected = useSelector((state: any) => state.auth.isConnected);
  const navigate = useNavigate();

  const userData = useSelector((state: any) => state.user.userData);
  let storage = localStorage.getItem("token");

  // // Convert the object to an array of values (which are the accounts)
  const accountDataArray = Object.values(AccountCardData);

  const filteredAccounts = accountDataArray.filter((account) => account.email === userData.email)
  console.log(filteredAccounts)

  return (
      <main className="main-profile bg-dark">
        <div className="header">
          <h1>Welcome back<br />{userData?.firstName} {userData?.lastName}!</h1>
          <Link className="edit-button" to='/editProfile'>Edit Name</Link>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {filteredAccounts.map((item, index) => (
          <AccountCard key={index} title={item.title} amount={item.amount}/>
        ))}
      </main>
  )
}

export default Profile