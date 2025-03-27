import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('userData');  // Check if user data is in localStorage

    return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;