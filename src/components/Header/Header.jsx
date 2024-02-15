import React from 'react';
import { HeaderContainer } from './Header.styled';
import Logo from '../Logo/Logo';
export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <h1>Welcome to the Home Page</h1>

    </HeaderContainer>
  );
};
