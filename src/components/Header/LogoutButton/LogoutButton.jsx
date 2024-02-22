import React, { useState } from 'react';
import { StyledButtonOut, ModalOverlay, ModalContent, ModalButton, ModalCancelButton, ModalWrapper } from './LogoutButton.styled';
import { logOutThunk } from 'services/fetchAuth';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logOutThunk())
      .unwrap()
      .then(() => {
        toast.success('Logout successful');
      })
      .catch(() => {
        toast.error('Something went wrong... Try again...');
      });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <StyledButtonOut onClick={toggleModal}>Logout</StyledButtonOut>
      {isModalOpen && (
        <ModalOverlay>
          <ModalWrapper>
            <ModalContent>
              <p>Are you sure you want to log out?</p>
              <ModalButton onClick={handleLogout}>Log out</ModalButton>
              <ModalCancelButton onClick={toggleModal}>Cancel</ModalCancelButton>
            </ModalContent>
          </ModalWrapper>
        </ModalOverlay>
      )}
    </>
  );
};

export default LogoutButton;
