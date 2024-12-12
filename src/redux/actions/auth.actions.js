import { fetchUserProfile } from './user.actions';
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
            localStorage.setItem("token", token)
            // localStorage.setItem("user", JSON.stringify(user))
            // sessionStorage.setItem("token", token);
            dispatch(fetchUserProfile());
        } else {
            const errorData = await response.json();
            dispatch({ type: 'LOGIN_ERROR', payload: errorData.message });
        }
        } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
        console.error("Erreur lors de la connexion:", error);
        }
};

