import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../redux/actions/user.actions';
import { useNavigate } from 'react-router-dom';

function EditProfile() {

  const userData = useSelector((state: any) => state.user.userData || {});
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(userData.firstName || '');
  const [lastName, setLastName] = useState(userData.lastName || '');
  const dispatch = useDispatch();

  console.log(lastName)
  console.log(firstName)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editUser(firstName, lastName))

  }
  return (
    <div>
      <button onClick={() => navigate('/profile')}>Back to profile</button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>First name :</label><br></br>
        <input type="text" defaultValue={userData.firstName} placeholder={userData.firstName} onChange={(e) => setFirstName(e.target.value)}/><br></br>
        <label>Last name :</label><br></br>
        <input type="text" defaultValue={userData.lastName} placeholder={userData.lastName} onChange={(e) => setLastName(e.target.value)}/><br></br>
        <button type="submit">Edit profile</button>
      </form>
    </div>
  )
}

export default EditProfile