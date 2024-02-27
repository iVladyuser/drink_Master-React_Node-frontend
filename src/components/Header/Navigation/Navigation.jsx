import React, { useState, useEffect, useCallback } from 'react';
import Logo from '../../Logo/Logo';
import ThemeSwitcher from '../Switch/ThemeSwitcher';
import NavigationLink from '../Navigation/ButtonLink/ButtonLink';
import {
  NavigationContainer,
  LogoSwitcherStyled,
  CloseButton,
  ThemeSwitcherCloseBtn,
} from './Navigation.styled';

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
    (event) => {
      if (isVisible && !event.target.closest('.NavigationContainer')) {
        onClose();
      }
    },
    [isVisible, onClose]
  );

  const handleEscapeKey = useCallback(
    (event) => {
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
        <Logo />
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
