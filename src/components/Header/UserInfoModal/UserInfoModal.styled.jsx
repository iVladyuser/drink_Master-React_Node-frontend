import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #161f37;
  padding: 20px;
  border-radius: 16px;
  width: 500px;
  height: 426px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
  color: #fff;
`;

export const AvatarPreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #aaa;
`;

export const Label = styled.label`
  color: #fff;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
border: 1px solid rgba(243, 243, 243, 0.2);
color: #f3f3f3;
background-color: transparent;
font-family: inherit;
font-size: 14px;
font-weight: 600;
line-height: 1.29;

cursor: pointer;

transition: color 300ms linear, background-color 300ms linear;

  padding: 10px 20px;
  border: none;
  border-radius: 42px;
padding: 18px 147px;
width: 400px;
height: 54px;
  cursor: pointer;
`;

export const ButtonHover = styled(Button)`
  &:hover {
    background-color: #0056b3;
  }
`;
