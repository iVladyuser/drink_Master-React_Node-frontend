import React, { useState } from 'react';
import { HeaderContainer, LinkLogo } from './Header.styled';
import { ReactComponent as Logo } from '../../images/header/logoLight.svg';
import { ReactComponent as LogoDark } from '../../images/header/logoDark.svg';
import NavigationLink from './Navigation/ButtonLink/ButtonLink';
import Navigation from './Navigation/Navigation';
import ThemeSwitcher from './Switch/ThemeSwitcher';
import UserProfile from './User/UserProfile';
import UserProfileModal from './UserInfoModal/UserInfoModal';
import {
  StyledGiHamburgerMenu,
  UserBurgerStyle,
  UserSwitchStyled,
} from './Header.styled';
import useDeviceType from '../../hooks/useDeviceType';

export const Header = ({ theme, toggleTheme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const { isDesktop } = useDeviceType();

  const toggleModal = type => {
    setIsModalOpen(!isModalOpen);
    setModalType(type);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  return (
    <HeaderContainer>
      <LinkLogo to={'/'}>
        {theme === 'dark' ? <Logo /> : <LogoDark />}
        Drink Master
      </LinkLogo>
      {isDesktop && <NavigationLink />}
      <UserSwitchStyled>
        {isDesktop && <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />}
        <UserBurgerStyle>
          <UserProfile openModal={() => toggleModal('UserProfileModal')} />

          {isModalOpen && modalType === 'UserProfileModal' && (
            <UserProfileModal closeModal={closeModal} />
          )}

          <StyledGiHamburgerMenu onClick={() => toggleModal('Navigation')} />
          <Navigation
            toggleTheme={toggleTheme}
            theme={theme}
            onClose={closeModal}
            isVisible={isModalOpen && modalType === 'Navigation'}
          />
        </UserBurgerStyle>
      </UserSwitchStyled>
    </HeaderContainer>
  );
};

export default Header;
