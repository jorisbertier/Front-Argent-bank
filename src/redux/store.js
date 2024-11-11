import { configureStore } from '@reduxjs/toolkit'

const initialState = {
    user: { },
    token: null,
    loading: false,
    success: false,
    error: null,
    errorMessage: false,
  };
  
const reducer = (state = initialState, action) =>{
    switch (action.type) {
    case 'SIGNUP_SUCCESS':
    case 'LOGIN_SUCCESS':
        return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
        success: true,
        errorMessage: false,
        };
    case 'FETCH_PROFILE_SUCCESS':
        return {
        ...state,
        user: action.payload,
        error: null,
        };
    case 'SIGNUP_ERROR':
    case 'LOGIN_ERROR':
      return {
        ...state,
        errorMessage: true,
      };
    case 'FETCH_PROFILE_ERROR':
        return {
        ...state,
        error: action.payload,
        };
    default:
        return state;
    }
}

export const loginSuccess = (user, token) => ({
  type: 'LOGIN_SUCCESS',
  payload: { user, token },
});

const store = configureStore({
  reducer: { user: reducer },
});
export default store


// const store = configureStore({
//   reducer: {
//     auth: authReducer
//   }
// })
// export default store