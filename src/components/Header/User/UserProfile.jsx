import React from 'react';
import UserAvatar from './UserAvatar';
import { UserProfileContainer } from './UserProfile.styled';

const UserProfile = ({ user }) => {
  return (
    <UserProfileContainer>
      <h1>User Profile</h1>
      <UserAvatar name={user.name} avatarUrl={user.avatarUrl} />
    </UserProfileContainer>
  );
};

export default UserProfile;
