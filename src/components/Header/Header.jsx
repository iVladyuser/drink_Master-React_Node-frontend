import React, { useState } from 'react';
import { HeaderContainer } from './Header.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../Logo/Logo';

import Navigation from './Navigation/Navigation';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <HeaderContainer>
      <Logo />

      <GiHamburgerMenu onClick={toggleModal} />
      <Navigation onClose={toggleModal} isVisible={isModalOpen} />
    </HeaderContainer>
  );
};

export default Header;
