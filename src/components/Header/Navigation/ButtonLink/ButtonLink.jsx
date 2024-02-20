import React from 'react';
import { NavigationContent, ButtonLink } from './ButtonLink.styled';

const NavigationLink = () => {
    return (
        <NavigationContent>
            <ButtonLink to="/home">Home</ButtonLink>
            <ButtonLink to="/drinks">Drinks</ButtonLink>
            <ButtonLink to="/add">Add Drink</ButtonLink>
            <ButtonLink to="/my">My Drinks</ButtonLink>
            <ButtonLink to="/favorites">Favorites</ButtonLink>
        </NavigationContent>
    );
};

export default NavigationLink;