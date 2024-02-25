import React from 'react';
import { NavigationContent, ButtonLink } from './ButtonLink.styled';

const NavigationLink = ({ onNavigationClick }) => {
    const handleNavigationClick = () => {
        onNavigationClick();
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
