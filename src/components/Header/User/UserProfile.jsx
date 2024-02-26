import React, { useState, useEffect, useRef } from 'react';
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
  const userProfileRef = useRef(null);

  const userData = useSelector(state => state.auth.userData);

  useEffect(() => {
    if (userData) {
      setUserName(userData.name);
      setAvatarURL(userData.avatarURL);
    }
  }, [userData]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (userProfileRef.current && !userProfileRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsModalOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

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

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <UserProfileContainer ref={userProfileRef}>
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
          <LogoutButton onCloseMenu={handleCloseMenu} />
        </UserProfileMenu>
      )}
      {isModalOpen && (
        <UserInfoModal closeModal={() => setIsModalOpen(false)} handleNameUpdate={handleNameUpdate} userName={userName} userAvatar={avatarURL} />
      )}
    </UserProfileContainer>
  );
};

export default UserProfile;
