import styled from 'styled-components';
import { RxChevronDown } from 'react-icons/rx';

export const ArrowStyled = styled(RxChevronDown)`
  width: 20px;
  height: 20px;
  stroke-width: 1.8;
  stroke: #F3F3F3;
  transition: all 0.2s ease;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
