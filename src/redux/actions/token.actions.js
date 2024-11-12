import { fetchUserProfile } from "./user.actions";

export const loadUserFromStorage = () => (dispatch) => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    console.log('user', user)

    if (token && user) {
        try {
            const userData = JSON.parse(user); 
            dispatch({ type: 'LOGIN_SUCCESS', payload: { token, user: userData } });
            dispatch(fetchUserProfile(token));
        } catch (error) {
            console.error('Error durantly parsing user from local storage:', error);
        }
    }
}