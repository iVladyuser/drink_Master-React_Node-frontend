import React from 'react';
import {useNavigate} from 'react-router-dom';
import {FooterLog, FooterLogText, LinkLogo} from './LogoFooter.styled.jsx';
import { Logo } from 'images/footer/svg/Logo.jsx';

export const LogoFooter = () => {
    const navigate = useNavigate();
    const footerLogo= ()=>{
        navigate("/home");
    }
    return (
        <LinkLogo onClick={footerLogo}>
        < FooterLog>
        <Logo />
        <FooterLogText>
        Drink Master
        </FooterLogText>
        </FooterLog>
    </LinkLogo>
    );
};

export default LogoFooter;