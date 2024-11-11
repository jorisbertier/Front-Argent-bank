import axios from 'axios';
const API_BASE_URL = 'http://localhost:3001/api/v1/user';

// Action for inscription
export const signupUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, userData);
        dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'SIGNUP_ERROR', payload: error.response.data });
    }
};

// Action for connexion
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
            
            // Dispatch successful login with user data and token
            dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
            
            sessionStorage.setItem("token", token);
        } else {
            const errorData = await response.json();
            dispatch({ type: 'LOGIN_ERROR', payload: errorData.message });
        }
        } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
        console.error("Erreur lors de la connexion:", error);
        }
};

// Action for get profil user
export const fetchUserProfile = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
        `${API_BASE_URL}/profile`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
        );
        dispatch({ type: 'FETCH_PROFILE_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_PROFILE_ERROR', payload: error.response.data });
    }
};

