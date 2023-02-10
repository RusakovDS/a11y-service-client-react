import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const IsNotAutorized = () => {
  const { token } = useAuth();

  return <>{!token ? <Outlet /> : <Navigate to="/dashboard"/>}</>;
}

export default IsNotAutorized