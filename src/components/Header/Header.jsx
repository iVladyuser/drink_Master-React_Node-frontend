import React, { useState } from 'react';
import { HeaderContainer } from './Header.styled';
import Logo from '../Logo/Logo';
import NavigationLink from './Navigation/ButtonLink/ButtonLink';
import Navigation from './Navigation/Navigation';
import ThemeSwitcher from './Switch/ThemeSwitcher'
import LogoutButton from './LogoutButton/LogoutButton'
import { StyledGiHamburgerMenu } from './Header.styled';
import useDeviceType from '../../hooks/useDeviceType';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDesktop } = useDeviceType();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <HeaderContainer>
      <Logo />
      {isDesktop && <NavigationLink />}
      {isDesktop && <ThemeSwitcher />}
      <LogoutButton />
      <StyledGiHamburgerMenu onClick={toggleModal} />
      <Navigation onClose={toggleModal} isVisible={isModalOpen} />
    </HeaderContainer>
  );
};

export default Header;
