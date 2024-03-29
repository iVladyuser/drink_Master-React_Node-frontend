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
  align-items: center;
  background-color: #161f37;
  padding: 50px 50px 75px 50px;
  border-radius: 16px;
  width: 500px;
  height: 426px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
  color: #fff;
`;

export const  FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
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
  position: relative;
`;

export const InputAvatarStyled = styled.input`
  display: none;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 25px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #161f37;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 42px;
  padding: 18px 24px;
  width: 400px;
  height: 56px;
  color: white;
`;

export const Button = styled.button`
  background-color: #161f37;
  color: #fff;
  padding: 10px 20px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 42px;
  padding: 18px 147px;
  width: 400px;
  height: 54px;
  cursor: pointer;

  &:hover {
    color: #161f37;
    background-color: #f3f3f3;
  }
`;

export const ChangeNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Add = styled.div`
  margin-top: -35px;
  width: 40px;
  height: 40px;
cursor: pointer;
  }
`;
