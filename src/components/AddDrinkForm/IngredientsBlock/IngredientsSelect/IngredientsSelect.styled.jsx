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
    padding: 0 24px;
    gap: 231px;
    height: 56px;
    width: 340px;
    border-radius: 200px;
    border: 1px solid #0A0A1180;
`

export const IngredientsSelectInput = styled.input`
outline: none;
padding: 4px;
`



export const CustomSelect = styled.button`
  width: 100%;
  height: 34px;
  padding-bottom: 14px;
  padding-left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: right;
  color: #f3f3f3;

  border-style: none;
  border-bottom: 1px solid #f3f3f380;
  background: transparent;

  &:focus {
    border-bottom: 1px solid #f3f3f3;

    outline: transparent;
  }

  &:focus span,
  &:hover span {
    color: #f3f3f3;
  }

  &::after {
    padding-bottom: 14px;
  }

  span {
    display: block;
  }

  @media (min-width: 768px) {
    height: 41px;
  }
`;

export const IngredientsSelectWrapper = styled.div`
position: relative;
`

export const PlaceholderWrap = styled.div`
  position: absolute;
  top: 24px;
  right: 0px;
  width: 200px;
  border-radius: 15px;
  overflow: auto;
  font-size: 12;
  line-height: 1.3;
  color: #f3f3f380;
  border-radius: 12px;

  max-height: ${({ open }) => (open ? '55px' : '0')};
  background-color: ${({ open }) => (open ? '#161f37' : 'transparent')};
`;

export const Label = styled.span`
  color: #f3f3f380;
`;

// export const DropMenu = styled.div`
//   max-height: 300px;
//   overflow-y: scroll;
//   scroll-behavior: smooth;

//   transition: 500ms linear color;

//   &::-webkit-scrollbar {
//     margin-top: 4px;
//     width: 4px;
//     background-color: transparent;
//     height: 50px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #f3f3f380;
//     border-radius: 4px;
//   }
//   &::-webkit-scrollbar-track-piece {
//     background: transparent;
//     margin-top: 18px;
//     margin-bottom: 18px;
//     margin-right: 4px;
//   }

//   position: absolute;
//   top: 24px;
//   right: -200px;
//   padding: 10px;

//   font-size: 12;
//   line-height: 1.3;
//   color: #f3f3f380;

//   border-radius: 12px;
//   background-color: #161f37;
//   z-index: 10;

//   div:not(:last-of-type) {
//     margin-bottom: 6px;
//   }

//   div:hover,
//   div:focus {
//     color: #f3f3f3;
//   }
// `;
