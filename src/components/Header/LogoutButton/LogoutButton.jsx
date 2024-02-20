import React from 'react';
import axios from 'axios';
import { StyledButtonOut } from './LogoutButton.styled';

const api = axios.create({
    baseURL: 'https://drink-master-project-zi2s.onrender.com'
});

const LogoutButton = () => {
    const handleLogout = async () => {
        try {
            
            await api.post('/user/logout');

            localStorage.removeItem('token');
            
            window.location.href = '/welcome';
        } catch (error) {
            console.error('Ошибка выхода пользователя:', error);
        }
    };

    return (
        <StyledButtonOut onClick={handleLogout}>
            Logout
        </StyledButtonOut>
    );
};

export default LogoutButton;
