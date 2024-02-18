import React from 'react';
import { ReactComponent as LogoSVG } from '../../images/logo.svg';
import { StyledSvg, LogoContainer, StyleLink } from './Logo.styled';

const Logo = () => {
  return (
    <LogoContainer>
      <StyledSvg>
      <a href="./"><LogoSVG /></a>
      </StyledSvg>
      <StyleLink>
      <a href="./">Drink Master</a>
      </StyleLink>
    </LogoContainer>
  );
};

export default Logo;
