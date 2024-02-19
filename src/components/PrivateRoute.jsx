import { SIGNIN_ROUTE } from 'constants/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/auth.selectors';

const PrivateRoute = ({ children, navigateTo = SIGNIN_ROUTE }) => {
  const authenticated = useSelector(selectIsLoggedIn);
  return authenticated ? children : <Navigate to={navigateTo} replace />;
};

export default PrivateRoute;
