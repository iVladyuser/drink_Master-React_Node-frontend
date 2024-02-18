import styled from 'styled-components';

export const NavigationContainer = styled.div`
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #161f37;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 0.5s ease;

  &.open {
    top: 0;
  }
`;

export const NavigationContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
