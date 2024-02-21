import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { UserProfileContainer, UserName, UserProfileMenu } from './UserProfile.styled';
import LogoutButton from '../LogoutButton/LogoutButton';

const UserProfile = ({ openModal }) => {
  const userData = useSelector(state => state.auth.userData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <UserProfileContainer>
      <UserName
        role="button"
        tabIndex="0"
        onClick={toggleMenu}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleMenu();
          }
        }}
      >
        {userData && userData.name}
      </UserName>
      {isMenuOpen && (
        <UserProfileMenu>
          <button>Edit Profile</button>
          <LogoutButton />
        </UserProfileMenu>
      )}
    </UserProfileContainer>
  );
};

export default UserProfile;
