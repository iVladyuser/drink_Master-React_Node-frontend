import React from 'react';
import { Link} from 'react-router-dom';
import {FooterNav, FooterUl } from './NavFooter.styled';

export const NavFooter = () => {
    return (
        <nav>
            <FooterUl>
                <FooterNav>
                    <Link to="/drinks">Drinks</Link>
                </FooterNav>
                <FooterNav>
                    <Link to="/add">Add Drink</Link>
                </FooterNav>
                <FooterNav>
                    <Link to="/my">My Drinks</Link>
                </FooterNav>
                <FooterNav>
                    <Link to="/favorites">Favorites drinks</Link>
                </FooterNav>
            </FooterUl>
        </nav>
    );
};

export default NavFooter;