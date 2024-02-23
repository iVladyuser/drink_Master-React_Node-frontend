import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserProfileContainer, UserName, UserProfileMenu, Avatar } from './UserProfile.styled';
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
          <button onClick={openUserInfoModal}>
            Edit Profile
          </button>
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
