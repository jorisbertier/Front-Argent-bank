export const signOut = () => (dispatch) => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    
    dispatch({type: 'SIGNOUT_SUCCESS'});
    dispatch({type: 'RESET_USER_DATA'});

}