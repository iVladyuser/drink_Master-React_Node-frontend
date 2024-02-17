import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { NavigationContainer, NavigationContent } from './Navigation.styled';

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
                <MdClose onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontSize: '24px' }} />
            </NavigationContent>
        </NavigationContainer>
    );
};

export default Navigation;
