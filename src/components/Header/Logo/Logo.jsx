import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/home">
            <img src="logo.png" alt="Логотип" />
        </Link>
    );
};

export default Logo;