import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as IconSVG } from '../../../images/header/Icon.svg';
import { UserProfileContainer, UserName, UserProfileMenu, Avatar, EditProfileButton } from './UserProfile.styled';
import LogoutButton from '../LogoutButton/LogoutButton';
import UserInfoModal from '../UserInfoModal/UserInfoModal';

const UserProfile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [avatarURL, setAvatarURL] = useState('');

  const userData = useSelector(state => state.auth.userData);

  useEffect(() => {
    if (userData) {
      setUserName(userData.name);
      setAvatarURL(userData.avatarURL);
    }
  }, [userData]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openUserInfoModal = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  const handleNameUpdate = (newName) => {
    setUserName(newName);
    setIsModalOpen(false);
  };

  return (
    <UserProfileContainer>
      <Avatar src={avatarURL} alt="Avatar" />
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
        {userName}

      </UserName>
      {isMenuOpen && (
        <UserProfileMenu>
          <EditProfileButton onClick={openUserInfoModal}>
          Edit Profile
          <IconSVG />
        </EditProfileButton>
          <LogoutButton />
        </UserProfileMenu>
      )}
      {isModalOpen && (
        <UserInfoModal closeModal={() => setIsModalOpen(false)} handleNameUpdate={handleNameUpdate} />
      )}
    </UserProfileContainer>
  );
};

export default UserProfile;
