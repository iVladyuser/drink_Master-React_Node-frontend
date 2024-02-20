import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatarThunk } from '../../../services/fetchAuth';
import { ModalOverlay, ModalContent, ModalTitle } from './UserInfoModal.styled';

const UserProfileModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState('');

  const handleAvatarChange = e => {
    setAvatar(e.target.files[0]);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    if (avatar) {
      formData.append('avatar', avatar);
    }
    if (name) {
      formData.append('name', name);
    }
    try {
      await dispatch(updateAvatarThunk(formData));
      closeModal();
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleModalClick = e => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <ModalOverlay onClick={handleModalClick} onKeyDown={handleKeyPress}>
      <ModalContent>
        <ModalTitle>Edit User Profile</ModalTitle>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="avatar">Avatar:</label>
            <input type="file" id="avatar" onChange={handleAvatarChange} accept="image/*" />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserProfileModal;
