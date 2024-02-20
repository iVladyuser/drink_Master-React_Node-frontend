import React from 'react';

import { StyledButtonOut } from './LogoutButton.styled';
import { logOutThunk } from 'services/fetchAuth';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutThunk())
      .unwrap()
      .then(() => {
        toast.success('LogOut successful');
      })
      .catch(() => {
        toast.error('Something went wrong... Try again...');
      });
  };

  return <StyledButtonOut onClick={handleLogout}>Logout</StyledButtonOut>;
};

export default LogoutButton;
