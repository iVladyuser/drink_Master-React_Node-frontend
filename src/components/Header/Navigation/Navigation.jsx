import React, { useState, useEffect, useCallback } from 'react';
import { ReactComponent as Logo } from '../../../images/header/logoLight.svg';
import { ReactComponent as LogoDark } from '../../../images/header/logoDark.svg';
import ThemeSwitcher from '../Switch/ThemeSwitcher';
import NavigationLink from '../Navigation/ButtonLink/ButtonLink';
import {
  NavigationContainer,
  LogoSwitcherStyled,
  CloseButton,
  ThemeSwitcherCloseBtn,
} from './Navigation.styled';
import { LinkLogo } from '../Header.styled';

const Navigation = ({ onClose, isVisible, toggleTheme, theme }) => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isVisible) {
      setAnimationClass('open');
    } else {
      setAnimationClass('');
    }
  }, [isVisible]);

  const handleCloseModal = () => {
    onClose();
  };

  const handleNavigationClick = () => {
    onClose();
  };

  const handleOutsideClick = useCallback(
    event => {
      if (isVisible && !event.target.closest('.NavigationContainer')) {
        onClose();
      }
    },
    [isVisible, onClose]
  );

  const handleEscapeKey = useCallback(
    event => {
      if (isVisible && event.keyCode === 27) {
        onClose();
      }
    },
    [isVisible, onClose]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleOutsideClick, handleEscapeKey]);

  return (
    <NavigationContainer className={animationClass}>
      <LogoSwitcherStyled>
        <LinkLogo to={'/home'}>
          {theme === 'dark' ? <Logo /> : <LogoDark />}
          Drink Master
        </LinkLogo>
        <ThemeSwitcherCloseBtn>
          <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />{' '}
          <CloseButton onClick={handleCloseModal}>Close</CloseButton>
        </ThemeSwitcherCloseBtn>
      </LogoSwitcherStyled>
      <NavigationLink onNavigationClick={handleNavigationClick} />
    </NavigationContainer>
  );
};

export default Navigation;
