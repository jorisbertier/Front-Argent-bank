export const signOut = () => (dispatch) => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.clear();
    sessionStorage.clear();
    
    dispatch({type: 'SIGNOUT_SUCCESS'});
    dispatch({type: 'RESET_USER_DATA'});

}