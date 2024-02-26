import React, { useState, useEffect } from 'react';
import { NavigationContent, ButtonNavLink } from './ButtonLink.styled';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ onNavigationClick }) => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1440);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 1440);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNavigationClick = () => {
        if (!isWideScreen) {
            onNavigationClick();
        }
    };

    return (
        <NavigationContent>
            <ButtonNavLink as={NavLink} to="/home" onClick={handleNavigationClick} activeClassName="active">Home</ButtonNavLink>
            <ButtonNavLink as={NavLink} to="/drinks" onClick={handleNavigationClick} activeClassName="active">Drinks</ButtonNavLink>
            <ButtonNavLink as={NavLink} to="/add" onClick={handleNavigationClick} activeClassName="active">Add Drink</ButtonNavLink>
            <ButtonNavLink as={NavLink} to="/my" onClick={handleNavigationClick} activeClassName="active">My Drinks</ButtonNavLink>
            <ButtonNavLink as={NavLink} to="/favorites" onClick={handleNavigationClick} activeClassName="active">Favorites</ButtonNavLink>
        </NavigationContent>
    );
};

export default NavigationLink;
