import styled from 'styled-components';
import { RxChevronDown } from 'react-icons/rx';

export const ArrowStyled = styled(RxChevronDown)`
  width: 20px;
  height: 20px;
  stroke-width: 2;

  transition: all 0.2s ease;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const IngredientsSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 18px;
  height: 50px;
  width: 200px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.5);
`

export const IngredientsSelectInput = styled.input`
  border: transparent;
  background-color: transparent;

  &:hover,
  &:focus {
    outline: transparent;
  }

  padding: 4px;
  width: 142px;
  font-family: "Manrope", sans-serif;
  font-size: 17px;
  line-height: 26.52px;
  color: rgba(243, 243, 243, 1);

  ::placeholder {
    color: rgba(243, 243, 243, 0.5);
}
`

export const IngredientsSelectWrapper = styled.div`
position: relative;
`

export const PlaceholderWrap = styled.div`
  position: absolute;
  top: 36px;
  right: 0px;
  width: 200px;
  border-radius: 15px;
  overflow: auto;
  border-radius: 12px;
  z-index: 10;
  padding: 15px;
  font-family: "Manrope", sans-serif;
  font-size: 17px;
  line-height: 26.52px;
  color: #f3f3f380;

  max-height: ${({ open }) => (open ? '300px' : '0')};
  background-color: ${({ open }) => (open ? '#161f37' : 'transparent')};
  display: ${({ open }) => (open ? 'block' : 'none')};
`;