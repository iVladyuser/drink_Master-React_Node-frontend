import styled from 'styled-components';

export const StyledButtonOut = styled.button`
padding: 14px 40px;
border-radius: 42px;
min-width: 52px;
border: 1px solid rgba(243, 243, 243, 0.2);
color: #f3f3f3;
background-color: transparent;
font-family: inherit;
font-size: 14px;
font-weight: 600;
line-height: 1.29;

cursor: pointer;

transition: color 300ms linear, background-color 300ms linear;

&:hover {
  color: #161f37;
  background-color: #f3f3f3;
}

@media (min-width: 768px) {
  padding: 18px 44px;
  min-width: 59px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.12;
}
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
    background-color: #161f37;
    padding: 50px 25px 0 25px;
    border-radius: 16px;
width: 335px;
height: 193px;
box-shadow: 0 4px 48px 0 rgba(0, 0, 0, 0.1);


@media (min-width: 768px) {
  width: 500px;
  height: 215px;
  padding: 50px 50px 0 50px;
}
`;

export const TextStyled = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
text-align: center;
color: #f3f3f3;
padding-bottom: 25px;
`;

export const ModalButton = styled.button`
padding: 14px 40px;
border-radius: 42px;
min-width: 52px;
border: 1px solid rgba(243, 243, 243, 0.2);
color: #f3f3f3;
background-color: transparent;
font-family: inherit;
font-size: 14px;
font-weight: 600;
line-height: 1.29;

cursor: pointer;

transition: color 300ms linear, background-color 300ms linear;

&:hover {
  color: #161f37;
  background-color: #f3f3f3;
}

@media (min-width: 768px) {
  padding: 18px 44px;
  min-width: 59px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.12;

}
`;

export const ModalCancelButton = styled(ModalButton)`
padding: 14px 40px;
border-radius: 42px;
min-width: 52px;
border: 1px solid rgba(243, 243, 243, 0.2);
color: #f3f3f3;
background-color: transparent;
font-family: inherit;
font-size: 14px;
font-weight: 600;
line-height: 1.29;

cursor: pointer;

transition: color 300ms linear, background-color 300ms linear;

&:hover {
  color: #161f37;
  background-color: red;
}

@media (min-width: 768px) {
  padding: 18px 44px;
  min-width: 59px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.12;
  
}
`;

export const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
`;

export const  ButtonOutWrapper = styled.div`
display: flex;
justify-content:space-between;
`;
