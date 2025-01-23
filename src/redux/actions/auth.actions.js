import { fetchUserProfile } from './user.actions';

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST", //REquest HTTP  GET PUT POST DELETE OPTIONS 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const errorData = await response.json();
            dispatch({ type: 'LOGIN_ERROR', payload: errorData.message });
            return;
        }

        const data = await response.json();
        const { token, user } = data.body;

        if (!token) {
            dispatch({ type: 'LOGIN_ERROR', payload: "Token absent dans la réponse du serveur." });
            return;
        }

        dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
        localStorage.setItem("token", token);
        dispatch(fetchUserProfile());
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
        console.error("Erreur lors de la connexion:", error);
    }
};
