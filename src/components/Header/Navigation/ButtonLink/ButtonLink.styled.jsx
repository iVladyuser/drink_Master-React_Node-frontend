import styled from 'styled-components';

export const NavigationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 256px;
  gap: 16px;

  @media (min-width: 1440px) {
    flex-direction: row;
    padding: 0px 16px 0 0;
  }
`;

export const ButtonNavLink = styled.button`
  padding: 8px 16px;
  border-radius: 40px;
  min-width: 71px;
  height: 39px;
  border: 1px solid ${({ theme }) => theme.button.buttonTextHover};
  color: ${({ theme }) => theme.colorText};
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

  &.active {
    color: ${({ theme }) => theme.bodyBgc};
    background-color: ${({ theme }) => theme.button.buttonTextHover};
  }

  @media (min-width: 768px) {
    padding: 11px 16px;
    min-width: 59px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.12;
  }
`;
