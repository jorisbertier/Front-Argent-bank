import { fetchUserProfile } from './user.actions';
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3001/api/v1/user';

// export const signupUser = (userData) => async (dispatch) => {
//     try {
//         const response = await axios.post(`${API_BASE_URL}/signup`, userData);
//         dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
//     } catch (error) {
//         dispatch({ type: 'SIGNUP_ERROR', payload: error.response.data });
//     }
// };

export const loginUser = (credentials) => async (dispatch) => {
        try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
    
        if (response.ok) {
            const data = await response.json();
            const { token, user } = data.body;
            
            dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
            sessionStorage.setItem("token", token);
            dispatch(fetchUserProfile(token));
        } else {
            const errorData = await response.json();
            dispatch({ type: 'LOGIN_ERROR', payload: errorData.message });
        }
        } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
        console.error("Erreur lors de la connexion:", error);
        }
};

