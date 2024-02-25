import React, { useState, useEffect } from 'react';
import { NavigationContent, ButtonLink } from './ButtonLink.styled';

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
            <ButtonLink to="/home" onClick={handleNavigationClick}>Home</ButtonLink>
            <ButtonLink to="/drinks" onClick={handleNavigationClick}>Drinks</ButtonLink>
            <ButtonLink to="/add" onClick={handleNavigationClick}>Add Drink</ButtonLink>
            <ButtonLink to="/my" onClick={handleNavigationClick}>My Drinks</ButtonLink>
            <ButtonLink to="/favorites" onClick={handleNavigationClick}>Favorites</ButtonLink>
        </NavigationContent>
    );
};

export default NavigationLink;
