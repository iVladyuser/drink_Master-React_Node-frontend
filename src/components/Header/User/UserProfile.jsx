import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { UserProfileContainer, UserName, UserProfileMenu } from './UserProfile.styled';
import LogoutButton from '../LogoutButton/LogoutButton';
import UserInfoModal from '../UserInfoModal/UserInfoModal';
import { RiPencilLine } from 'react-icons/ri';

const UserProfile = ({ openModal }) => {
  const userData = useSelector(state => state.auth.userData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openUserInfoModal = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
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
          <button onClick={openUserInfoModal}>
            <RiPencilLine /> Edit Profile
          </button>
          <LogoutButton />
        </UserProfileMenu>
      )}
      {isModalOpen && <UserInfoModal closeModal={() => setIsModalOpen(false)} />}
    </UserProfileContainer>
  );
};

export default UserProfile;
