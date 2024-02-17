import React, { useState } from 'react';
import { HeaderContainer } from './Header.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../Logo/Logo';
import ThemeSwitcher from './Switch/ThemeSwitcher';
import Navigation from './Navigation/Navigation';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <HeaderContainer>
      <Logo />
      <ThemeSwitcher />
      <GiHamburgerMenu onClick={toggleModal} />
      {isModalOpen && <Navigation onClose={toggleModal} />}
    </HeaderContainer>
  );
};
