import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducers/auth.reducer';
import { userReducer } from './reducers/user.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
});

const store = configureStore({
  reducer: rootReducer, 
});

export default store;
