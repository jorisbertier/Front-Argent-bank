// authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './authActions'

// const initialState = {
//   loading: false,
//   userInfo: null,
//   userToken: null,
//   error: null,
//   success: false,
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//       // Register user
//       builder
//         .addCase(registerUser.pending, (state) => {
//           state.loading = true;
//           state.error = null; // Réinitialiser l'erreur à chaque nouvelle tentative
//         })
//         .addCase(registerUser.fulfilled, (state, { payload }) => {
//           state.loading = false;
//           state.success = true; // Inscription réussie
//           state.userInfo = payload.user; // Mettre à jour les informations de l'utilisateur
//           state.userToken = payload.token; // Mettre à jour le token de l'utilisateur
//         })
//         .addCase(registerUser.rejected, (state, { payload }) => {
//           state.loading = false;
//           state.error = payload; // Stocker l'erreur de l'inscription
//         });
//     },
//   });
// export default authSlice.reducer