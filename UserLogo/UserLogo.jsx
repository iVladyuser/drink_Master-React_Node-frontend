import React from 'react';
import UserLogoPopup from './UserLogoPopup';

const UserLogo = ({ userPhoto, userName }) => {
    return (
        <div>
            <img src={userPhoto} alt="User" />
            <span>{userName}</span>
            <UserLogoPopup />
        </div>
    );
};

export default UserLogo;
