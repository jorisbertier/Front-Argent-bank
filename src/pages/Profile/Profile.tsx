import React from 'react';
import '../../index.css';
import '../../App.css'
import { useSelector } from 'react-redux';
import AccountCard from '../../components/AccountCard.tsx';

function Profile() {

  const userData = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.auth.token);

  return (
    <main>
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{userData?.firstName} {userData?.lastName}!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <AccountCard
        title={"Argent Bank Checking (x8349)"}
        amount={'$2,082.79'}
        description={'Available Balance'}
      />
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    </main>
  )
}

export default Profile