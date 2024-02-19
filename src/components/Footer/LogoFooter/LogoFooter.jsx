import React from 'react';
import { Link } from 'react-router-dom';
import {FooterLog, FooterLogText} from './LogoFooter.styled.jsx';
import { Logo } from 'images/footer/svg/Logo.jsx';

export const LogoFooter = () => {
    return (
        <Link to="/home">
        < FooterLog>
        <Logo />
        <FooterLogText>
        Drink Master
        </FooterLogText>
        </FooterLog>
    </Link>
    );
};

export default LogoFooter;