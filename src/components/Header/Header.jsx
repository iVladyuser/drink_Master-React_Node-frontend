import React, { useState } from 'react';
import { HeaderContainer } from './Header.styled';
import Logo from '../Logo/Logo';
import Navigation from './Navigation/Navigation';
import { StyledGiHamburgerMenu } from './Header.styled';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <HeaderContainer>
      <Logo />
      <StyledGiHamburgerMenu onClick={toggleModal} />
      <Navigation onClose={toggleModal} isVisible={isModalOpen} />
    </HeaderContainer>
  );
};

export default Header;
