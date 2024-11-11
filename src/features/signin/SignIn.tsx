import React, { useEffect, useState } from 'react'
import '../../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/userActions';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { success, errorMessage, loading } = useSelector((state) => state.user); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    console.log(errorMessage)
    useEffect(() => {
        if (success) {
            navigate('/profile');
        }
    }, [success, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUser({ email: username, password }));
    };

    return (
    <body>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={(e)=>  setUsername(e.target.value)}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {errorMessage && <span className='error-message'>Email or password incorrecte</span> }
                <div className="input-remember">
                    <input type="checkbox" id="remember-me"/>
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                {/* <Link to="/profile" className="sign-in-button">Sign In</Link> */}
                <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    </body>
    )
}

export default SignIn

    // const { loading, userInfo, error, success } = useSelector(
    //     (state) => state.auth
    //   )
    //   const dispatch = useDispatch()
    //   const { register, handleSubmit } = useForm();

    //   useEffect(() => {
    //     // redirect user to login page if registration was successful
    //     if (success) navigate('/login')
    //     // redirect authenticated user to profile screen
    //     if (userInfo) navigate('/user-profile')
    //   }, [navigate, userInfo, success])
    
    //   const submitForm = (data) => {
    //     // check if passwords match
    //     if (data.password !== data.confirmPassword) {
    //       alert('Password mismatch')
    //     }
    //     // transform email string to lowercase to avoid case sensitivity issues in login
    //     data.email = data.email.toLowerCase()
    //     dispatch(registerUser(data))
    //   }