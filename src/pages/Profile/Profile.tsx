import React, { useEffect, useState } from 'react';
import '../../index.css';
import '../../App.css'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { fetchUserProfile } from '../../redux/actions/auth.actions';
import { loginSuccess } from '../../redux/store';
import { useGetUserProfileQuery } from '../../redux/apiSlice';
import { userProfile } from '../../redux/actions/user.actions';

function Profile() {

  // const token = useSelector((state) => state.user.token);
  // console.log(token)
  // const dispatch = useDispatch();

  // /* Asynchronous function that retrieves user data and updates it with useEffect */
  // useEffect(() => {
  //     if (token) {
  //         const userData = async () => {
  //             try {
  //                 const response = await fetch('http://localhost:3001/api/v1/user/profile', {
  //                     method: 'POST',
  //                     headers: {
  //                         'Content-Type': 'application/json',
  //                         'Authorization': `Bearer ${token}`,
  //                     },
  //                 });
  //                 if (response.ok) {
  //                     const data = await response.json();
  //                     /* 
  //                         Checking that the query response is indeed retrieved
  //                         console.log(data) 
  //                     */
  //                     const userData = {
  //                         createdAt: data.body.createdAt,
  //                         updatedAt: data.body.updatedAt,
  //                         id: data.body.id,
  //                         email: data.body.email,
  //                         firstname: data.body.firstName,
  //                         lastname: data.body.lastName,
  //                         username: data.body.userName
  //                     }
  //                     /* Return user data in redux state */
  //                     dispatch(userProfile(userData));
  //                 } else {
  //                     console.log("error while retrieving profile");
  //                 }
  //             } catch (error) {
  //                 console.error(error);
  //             };
  //         };
  //         userData();
  //     }
  // }, [dispatch, token]);
  return (
    <main>
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
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