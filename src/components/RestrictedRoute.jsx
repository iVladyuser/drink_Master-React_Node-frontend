import { HOME_ROUTE } from 'constants/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/auth.selectors';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = HOME_ROUTE,
}) => {
  const authenticated = useSelector(selectIsLoggedIn);
  return authenticated ? <Navigate to={redirectTo} replace /> : Component;
};
