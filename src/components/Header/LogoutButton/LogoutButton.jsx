import React, { useState } from 'react';
import { StyledButtonOut, ModalOverlay, ModalContent, ModalButton, ModalCancelButton, ModalWrapper, ButtonOutWrapper,TextStyled } from './LogoutButton.styled';
import { logOutThunk } from 'services/fetchAuth';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const LogoutButton = ({ onCloseMenu }) => {
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

  const handleCloseMenu = () => {
    setIsModalOpen(false);
    onCloseMenu();
  };

  return (
    <>
      <StyledButtonOut onClick={toggleModal}>Logout</StyledButtonOut>
      {isModalOpen && (
        <ModalOverlay>
          <ModalWrapper>
            <ModalContent>
              <TextStyled><p>Are you sure you want to log out?</p></TextStyled>
              <ButtonOutWrapper>
                <ModalButton onClick={handleLogout}>Log out</ModalButton>
                <ModalCancelButton onClick={handleCloseMenu}>Cancel</ModalCancelButton> {/* Изменено на handleCloseMenu */}
              </ButtonOutWrapper>
            </ModalContent>
          </ModalWrapper>
        </ModalOverlay>
      )}
    </>
  );
};

export default LogoutButton;
