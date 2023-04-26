import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Spinner from './Spinner';

const PrivateRoute = () => {
  const location = useLocation();
  const { checking, isLoggedIn } = useContext(UserContext);

  return checking ? (
    // <h1>loading</h1>
    <Spinner />
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
