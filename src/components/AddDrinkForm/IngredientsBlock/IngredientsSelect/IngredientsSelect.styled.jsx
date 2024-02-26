import styled from 'styled-components';

export const CustomSelectIngr = styled.button`
  width: 100%;
  padding: 16px 18px;

  font-size: 14px;
  line-height: calc(18 / 14);
  font-weight: 400;
  color: ${({ theme }) => theme.fieldColorFocus};

  border: 1px solid ${({ theme }) => theme.fieldColor};
  border: 1px solid
    ${({ menuOpen, theme }) =>
      menuOpen ? theme.fieldColorFocus : theme.fieldColor};
  border-radius: 200px;
  background: transparent;

  &:focus {
    border: 1px solid ${({ theme }) => theme.fieldColorFocus};

    outline: transparent;
  }

  &:focus span,
  &:hover span {
    color: ${({ theme }) => theme.fieldColorFocus};
  }

  &::after {
    padding-bottom: 14px;
  }
`;

export const PlaceholderWrap = styled.div`
  display: flex;
  align-items: center;

  color: ${({ selected, theme }) =>
    !selected ? theme.fieldColor : theme.fieldColorFocus};

  span {
    display: block;
  }

  svg {
    margin-left: auto;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.fieldColor};
`;

export const IngredientsSpan = styled.span``;

export const DropMenu = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  scroll-behavior: smooth;

  transition: 500ms linear color;

  &::-webkit-scrollbar {
    margin-top: 4px;
    width: 4px;
    background-color: transparent;
    height: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.fieldColor};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track-piece {
    background: transparent;
    margin-top: 18px;
    margin-bottom: 18px;
    margin-right: 4px;
  }

  position: absolute;
  top: 48px;
  right: 0;
  padding: 10px;

  font-size: 12;
  line-height: 1.3;
  color: ${({ theme }) => theme.fieldColor};

  border-radius: 12px;
  background-color: ${({ theme }) => theme.selectBgc};
  z-index: 10;

  div:hover,
  div:focus {
    color: ${({ theme }) => theme.fieldColorFocus};
  }

  div:not(:last-of-type) {
    margin-bottom: 6px;
  }
`;

export const SelectWrapper = styled.div`
  margin-right: 8px;
  width: 100%;
  max-width: 200px;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: unset;
    flex-basis: 47%;
    margin-right: 14px;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 58%;
  }
`;

export const SelectItem = styled.div`
  cursor: pointer;
`;

export const SearchInput = styled.input`
  display: block;
  padding: 4px;

  margin-bottom: 8px;

  font-size: 12;
  line-height: 1.3;
  color: ${({ theme }) => theme.fieldColor};

  border-style: none;
  background-color: ${({ theme }) => theme.selectBgc};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  &:focus {
    color: ${({ theme }) => theme.fieldColorFocus};
    outline: transparent;
  }

  &::placeholder {
    color: ${({ theme }) => theme.fieldColor};
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

// import { RxChevronDown } from 'react-icons/rx';

// export const ArrowStyled = styled(RxChevronDown)`
//   width: 20px;
//   height: 20px;
//   stroke-width: 2;

//   transition: all 0.2s ease;
//   transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
// `;

// export const IngredientsSearchWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0 18px;
//   height: 50px;
//   width: 200px;
//   border-radius: 200px;
//   border: 1px solid rgba(243, 243, 243, 0.5);
// `

// export const IngredientsSelectInput = styled.input`
//   border: none;
//   background-color: transparent;

//   &:hover,
//   &:focus {
//     outline: transparent;
//   }

//   padding: 4px;
//   width: 142px;
//   font-family: "Manrope", sans-serif;
//   font-size: 17px;
//   line-height: 26.52px;
//   color: rgba(243, 243, 243, 1);

//   ::placeholder {
//     color: rgba(243, 243, 243, 0.5);
// }
// `

// export const IngredientsSelectWrapper = styled.div`
// position: relative;
// `

// export const PlaceholderWrap = styled.div`
//   position: absolute;
//   top: 36px;
//   right: 0px;
//   width: 200px;
//   border-radius: 15px;
//   overflow: auto;
//   border-radius: 12px;
//   z-index: 10;
//   padding: 15px;
//   font-family: "Manrope", sans-serif;
//   font-size: 17px;
//   line-height: 26.52px;
//   color: #f3f3f380;

//   max-height: ${({ open }) => (open ? '300px' : '0')};
//   background-color: ${({ open }) => (open ? '#161f37' : 'transparent')};
//   display: ${({ open }) => (open ? 'block' : 'none')};
// `;
