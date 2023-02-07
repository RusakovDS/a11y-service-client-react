import React from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const IsLoggedIn = () => {
  const { token } = useAuth();

  return <>{!token ? <Outlet /> : <Navigate to="/dashboard"/>}</>;
}

export default IsLoggedIn