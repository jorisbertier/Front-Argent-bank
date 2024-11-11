import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Définir l'API service pour récupérer les informations de l'utilisateur
export const apiSlice = createApi({
  reducerPath: 'api',  // Le nom du reducer
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1', // L'URL de base de votre API
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem('token'); // Récupérer le token du sessionStorage
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Définir un endpoint pour récupérer les informations de l'utilisateur
    getUserProfile: builder.query({
      query: () => '/user/profile',  // L'endpoint pour récupérer le profil
    }),
  }),
});

export const { useGetUserProfileQuery } = apiSlice;  