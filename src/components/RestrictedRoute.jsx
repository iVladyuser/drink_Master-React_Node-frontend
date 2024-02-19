import { WELCOME_ROUTE } from 'constants/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/auth.selectors';

const RestrictedRoute = ({ children, navigateTo = WELCOME_ROUTE }) => {
  const authenticated = useSelector(selectIsLoggedIn);
  return authenticated ? <Navigate to={navigateTo} replace /> : children;
};

export default RestrictedRoute;
