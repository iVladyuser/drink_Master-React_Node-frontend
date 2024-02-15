import React from 'react';
import EditProfile from './EditProfile'; // компонент EditProfile
import LogoutButton from '../LogoutButton/LogoutButton';

const UserLogoPopup = () => {
    return (
        <div>
            <EditProfile />
            <LogoutButton />
        </div>
    );
};

export default UserLogoPopup;