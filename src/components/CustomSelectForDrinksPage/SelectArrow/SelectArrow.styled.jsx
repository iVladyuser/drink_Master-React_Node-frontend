import styled from 'styled-components';
import { RxChevronDown } from 'react-icons/rx';

export const ArrowStyled = styled(RxChevronDown)`
  position: absolute;
  right: 17px;
  width: 20px;
  height: 20px;
  stroke-width: 1.8;
  stroke: #f3f3f3;
  transition: all 0.2s ease;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
  @media (min-width: 768px) {
    right: 18px;
  }
`;
