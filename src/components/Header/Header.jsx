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
      <a href="./"><Logo /></a>
      <a href="./">Drink Master</a>
      <GiHamburgerMenu onClick={toggleModal} />
      {isModalOpen && <Navigation onClose={toggleModal} />}
    </HeaderContainer>
  );
};

