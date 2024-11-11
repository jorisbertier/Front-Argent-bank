import { combineReducers, configureStore } from '@reduxjs/toolkit'

const initialState = {
  auth: {},  // Met à jour `user` en `auth` ici
  token: null,
  loading: false,
  success: false,
  error: null,
  errorMessage: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SIGNUP_SUCCESS':
      case 'LOGIN_SUCCESS':
          return {
              ...state,
              auth: action.payload.user,
              token: action.payload.token,
              error: null,
              success: true,
              errorMessage: false,
          };
      case 'FETCH_PROFILE_SUCCESS':
          return {
              ...state,
              auth: action.payload,
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
};

const rootReducer = combineReducers({
  auth: authReducer, 
});

export const loginSuccess = (auth, token) => ({
  type: 'LOGIN_SUCCESS',
  payload: { user: auth, token },
});

const store = configureStore({
  reducer: rootReducer,  // Utiliser `rootReducer` avec la clé `auth`
});

export default store;


// const store = configureStore({
//   reducer: {
//     auth: authReducer
//   }
// })
// export default store