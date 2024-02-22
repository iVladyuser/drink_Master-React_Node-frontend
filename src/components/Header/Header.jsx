import React, { useState } from 'react';
import { HeaderContainer } from './Header.styled';
import Logo from '../Logo/Logo';
import NavigationLink from './Navigation/ButtonLink/ButtonLink';
import Navigation from './Navigation/Navigation';
import ThemeSwitcher from './Switch/ThemeSwitcher'
import UserProfile from './User/UserProfile'
import UserProfileModal from './UserInfoModal/UserInfoModal'
import { StyledGiHamburgerMenu, UserBurgerStyle, UserSwitchStyled } from './Header.styled';
import useDeviceType from '../../hooks/useDeviceType';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const { isDesktop } = useDeviceType();

  const toggleModal = (type) => {
    setIsModalOpen(!isModalOpen);
    setModalType(type);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  return (
    <HeaderContainer>
      <Logo />
      {isDesktop && <NavigationLink />}
      < UserSwitchStyled>
      {isDesktop && <ThemeSwitcher />}
      <UserBurgerStyle>

        <UserProfile openModal={() => toggleModal('UserProfileModal')} />

      {isModalOpen && modalType === 'UserProfileModal' && (
        <UserProfileModal closeModal={closeModal} />
      )}

      <StyledGiHamburgerMenu onClick={() => toggleModal('Navigation')} />
      <Navigation
        onClose={closeModal}
        isVisible={isModalOpen && modalType === 'Navigation'}
      />
      </UserBurgerStyle>
      </UserSwitchStyled>
    </HeaderContainer>
  );
};

export default Header;
