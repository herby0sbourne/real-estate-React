import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute = () => {
  const location = useLocation();
  const { currentUser, checking, isLoggedIn } = useContext(UserContext);

  return checking ? (
    <h1>loading</h1>
  ) : isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={'/sign-in'} state={{ from: location }} replace />
  );
  // return currentUser ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to={'/sign-in'} state={{ from: location }} replace />
  // );
};

export default PrivateRoute;
