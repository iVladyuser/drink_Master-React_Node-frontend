import styled from 'styled-components';
import { FaAngleUp } from 'react-icons/fa';

export const ToTopDiv = styled.div`
  position: relative;
`;

export const ArrowUp = styled(FaAngleUp)`
  position: fixed;
  bottom: 40px;
  right: 25px;
  z-index: 100;
  background-color: ${({ theme }) => theme.fieldColor};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: ${({ theme }) => theme.bodyBgc};
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.fieldColorFocus};
    color: ${({ theme }) => theme.bodyBgc};
  }
`;
