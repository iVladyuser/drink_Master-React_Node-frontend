import styled from 'styled-components';

export const StyledButtonOut = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
`;

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
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const ModalButton = styled.button`
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 14px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
`;

export const ModalCancelButton = styled(ModalButton)`
    background-color: red;
`;

export const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000; 
`;
