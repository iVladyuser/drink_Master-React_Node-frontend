import React from 'react';
import StyledSvg from './LogoStyled';
const Logo = () => {
  return (
    <StyledSvg>
      <use href="../../images/icon.svg#logo" />
    </StyledSvg>
  );
};
export default Logo;
