import React from 'react';
import { ReactComponent as LogoSVG } from '../../images/logo.svg';
import StyledSvg from './Logo.styled';

const Logo = () => {
  return (
    <StyledSvg>
      <LogoSVG />
    </StyledSvg>
  );
};

export default Logo;
