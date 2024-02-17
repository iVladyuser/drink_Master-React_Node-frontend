import React from 'react';

const LogoutButton = () => {
    const handleLogout = () => {
        // выход пользователя из аккаунта
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;