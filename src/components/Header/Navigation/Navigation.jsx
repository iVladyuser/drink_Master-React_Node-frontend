import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  Logo  from '../../Logo/Logo';
import ThemeSwitcher from '../Switch/ThemeSwitcher';
import { NavigationContainer, NavigationContent, LogoSwitcherStyled, CloseButton, ThemeSwitcherCloseBtn} from './Navigation.styled';

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

                <nav>
                    <ul>
                        <li>
                            <Link to="/home" onClick={onClose}>Home</Link>
                        </li>
                        <li>
                            <Link to="/drinks" onClick={onClose}>Drinks</Link>
                        </li>
                        <li>
                            <Link to="/add" onClick={onClose}>Add Drink</Link>
                        </li>
                        <li>
                            <Link to="/my" onClick={onClose}>My Drinks</Link>
                        </li>
                        <li>
                            <Link to="/favorites" onClick={onClose}>Favorites</Link>
                        </li>
                    </ul>
                </nav>

            </NavigationContent>
        </NavigationContainer>
    );
};

export default Navigation;
