import React from 'react';

import {useNavigate} from 'react-router-dom';
import {FooterNav, FooterUl, ButtonLink } from './NavFooter.styled';

export const NavFooter = () => {
    const navigate = useNavigate();
    const footerDrinks= ()=>{
        navigate("/drinks");
    }
    const footerAdd= ()=>{
        navigate("/add");
    }
    const footerMy= ()=>{
        navigate("/my");
    }
    const footerFavorites= ()=>{
        navigate("/favorites");
    }
    return (
        <nav>
            <FooterUl>
                <FooterNav>
                    <ButtonLink onClick={footerDrinks}>Drinks</ButtonLink>
                </FooterNav>
                <FooterNav>
                    <ButtonLink  onClick={footerAdd}>Add Drink</ButtonLink>
                </FooterNav>
                <FooterNav>
                    <ButtonLink onClick={footerMy} >My Drinks</ButtonLink>
                </FooterNav>
                <FooterNav>
                    <ButtonLink onClick={footerFavorites} >Favorites drinks</ButtonLink>
                </FooterNav>
            </FooterUl>
        </nav>
    );
};

export default NavFooter;