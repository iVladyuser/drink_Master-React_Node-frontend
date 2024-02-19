import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import  Logo  from '../../Logo/Logo';
import ThemeSwitcher from '../Switch/ThemeSwitcher';
import { NavigationContainer, NavigationContent, LogoSwitcherStyled, CloseButton, ThemeSwitcherCloseBtn, ButtonLink} from './Navigation.styled';

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
            <NavigationContent>

            <ButtonLink to="/home">Home</ButtonLink>
            <ButtonLink to="/drinks">Drinks</ButtonLink>
            <ButtonLink to="/add">Add Drink</ButtonLink>
            <ButtonLink to="/my">My Drinks</ButtonLink>
            <ButtonLink to="/favorites">Favorites</ButtonLink>



            </NavigationContent>
        </NavigationContainer>
    );
};

export default Navigation;
