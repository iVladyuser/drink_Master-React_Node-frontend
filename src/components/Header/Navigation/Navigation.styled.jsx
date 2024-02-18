import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
export const NavigationContainer = styled.div`
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #161f37;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  transition: top 0.5s ease;

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
padding: 20px 20px 20px;
width: 320px;
border-bottom: 1px solid rgba(243, 243, 243, 0.2);
display: flex;
justify-content: space-between;
align-items: center;

@media (min-width: 768px) {
  width: 768px;
  padding: 16px 32px 0;
}

@media (min-width: 1440px) {
  width: 1440px;
  padding: 12px 112px 0;
}
`;
export const ThemeSwitcherCloseBtn = styled.div`
display: flex;
align-items: center;
gap: 14px;
`

export const NavigationContent = styled.div`
  // background-color: #fff;
  // padding: 20px;
  // border-radius: 10px;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
