import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isConnected = useSelector((state: any) => state.auth.isConnected);

    if (!isConnected) {
        return <Navigate to="/signIn" />;
    }

    return children;
};

export default ProtectedRoute;