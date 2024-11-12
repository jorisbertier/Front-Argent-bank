export const signOut = (navigate) => (dispatch) => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    console.log('LocalStorage after signOut:', localStorage.getItem('user'), localStorage.getItem('token')); // Ajout de logs
    dispatch({type: 'SIGNOUT_SUCCESS'});
    dispatch({type: 'RESET_USER_DATA'});
    navigate('/signIn');
}