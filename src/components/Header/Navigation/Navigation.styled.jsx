import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
export const NavigationContainer = styled.div`
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #161f37; ${({ theme }) => theme.buttonBg};
  transition: top 0.5s ease;
  z-index: 100000;
  &.open {
    top: 0;
  }
`;
export const CloseButton = styled(MdClose)`
  color: white;
  transition: color 0.5s ease;
  width: 25px;
  height: 25px;

  &:hover {
    color: grey;
  }
`;

export const LogoSwitcherStyled = styled.div`
  margin: 0 auto;
  padding: 20px 20px 25px;


  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);

  @media (min-width: 768px) {
    min-width: 768px;
    padding: 32px 28px 28px;
  }

  @media (min-width: 1440px) {
    min-width: 1440px;
    padding: 100px 28px 28px;
  }
`;
export const ThemeSwitcherCloseBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const NavigationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 256px;
  gap: 16px;
`;

export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 40px;
  min-width: 71px;
  height: 39px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: #f3f3f3;
  background-color: transparent;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;

  cursor: pointer;

  transition: color 300ms linear, background-color 300ms linear;

  &:hover {
    color: #f3f3f3;
    background-color: #161f37;
  }

  @media (min-width: 768px) {
    padding: 11px 16px;
    min-width: 59px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.12;
  }
  @media (min-width: 1440px) {
  //   padding: 8px 16px;
  //   min-width: 59px;
  //   font-size: 16px;
  //   font-weight: 600;
  //   line-height: 1.12;
  // }
`;
