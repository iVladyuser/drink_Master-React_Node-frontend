import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = ({ openModal }) => {
  const userData = useSelector(state => state.auth.userData);

  return (
    <div
      role="button"
      tabIndex="0"
      onClick={openModal}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          openModal();
        }
      }}
    >
      {userData && (
        <div>
          <h2 style={{ color: 'white' }}>{userData.name}</h2>
          {/* <p>Email: {userData.email}</p> */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
