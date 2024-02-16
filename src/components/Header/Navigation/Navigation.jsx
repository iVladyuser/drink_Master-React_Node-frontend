import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/drinks">Drinks</Link>
                </li>
                <li>
                    <Link to="/add">Add Drink</Link>
                </li>
                <li>
                    <Link to="/my">My Drinks</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;