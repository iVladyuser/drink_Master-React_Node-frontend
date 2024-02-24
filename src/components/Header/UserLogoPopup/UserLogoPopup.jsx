import React from 'react';
import EditProfile from './EditProfile'; // компонент EditProfile
import LogoutButton from '../LogoutButton/LogoutButton';
import { PopapDiv } from './UserLogoPopup.styled';

const UserLogoPopup = () => {
  return (
    <PopapDiv>
      <EditProfile />
      <LogoutButton />
    </PopapDiv>
  );
};

export default UserLogoPopup;
