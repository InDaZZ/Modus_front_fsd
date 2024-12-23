import React from 'react';
import { Navigate, Outlet } from 'react-router';

export const ProtectedAdminRoute = () => {
    const adminToken = localStorage.getItem('adminToken');
    console.log(adminToken, 'есть токен при роверке');

    return adminToken ? <Outlet></Outlet> : <Navigate to="/adminauthpage" replace></Navigate>;
};
