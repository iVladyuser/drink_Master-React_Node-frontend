import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import  Logo  from '../../Logo/Logo';
import ThemeSwitcher from '../Switch/ThemeSwitcher';
import NavigationLink from '../Navigation/ButtonLink/ButtonLink'
import { NavigationContainer, LogoSwitcherStyled, CloseButton, ThemeSwitcherCloseBtn,} from './Navigation.styled';

const Navigation = ({ onClose, isVisible }) => {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (isVisible) {
            setAnimationClass('open');
        } else {
            setAnimationClass('');
        }
    }, [isVisible]);

    return (
        <NavigationContainer className={animationClass}>

<LogoSwitcherStyled>
          <Logo />
          <ThemeSwitcherCloseBtn>
          <ThemeSwitcher />
          <CloseButton onClick={onClose} />
          </ThemeSwitcherCloseBtn>
          </LogoSwitcherStyled>
            <NavigationLink />
        </NavigationContainer>
    );
};

export default Navigation;
