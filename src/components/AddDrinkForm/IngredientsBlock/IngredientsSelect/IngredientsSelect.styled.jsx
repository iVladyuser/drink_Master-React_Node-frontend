import styled from '@emotion/styled';

export const CustomSelect = styled.button`
  width: 200px;
  height: 50px;
  padding: 16px 18px;

  display: flex;
  align-items: center;

  color: #f3f3f3;

  border-style: none;
  border: 1px solid #f3f3f380;
  border-radius: 200px;
  background: transparent;

  &:focus {
    border: 1px solid #f3f3f3;

    outline: transparent;
  }

  &:focus span,
  &:hover span {
    color: #f3f3f3;
  }

  span {
    display: block;
  }

  @media (min-width: 768px) {
    height: 41px;
  }
`;

export const PlaceholderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ selected }) => (!selected ? '#f3f3f380' : '#F3F3F3')};

  span {
    display: block;
  }
`;

export const Label = styled.span`
  color: #f3f3f380;
`;

export const IngredientsSpan = styled.span``

export const DropMenu = styled.div`
  max-height: 300px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding: 10px;

  transition: 500ms linear color;

  position: absolute;
  top: 24px;
  right: 0;
  padding: 10px;

  font-size: 12;
  line-height: 1.3;
  color: #f3f3f380;

  border-radius: 12px;
  background-color: #161f37;
  z-index: 10;

  div:hover,
  div:focus {
    color: #f3f3f3;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }
`;

export const SelectItem = styled.div`
  cursor: pointer;
`;

export const SearchInput = styled.input`
  display: block;

  margin-bottom: 8px;

  font-size: 12;
  line-height: 1.3;
  color: #f3f3f380;

  border-style: none;
  background-color: #161f37;
  border-bottom: 1px solid #f3f3f311;

  &:focus {
    color: #f3f3f3;
    outline: transparent;
  }

  &::placeholder {
    color: #f3f3f380;
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