import styled from 'styled-components';

export const CustomSelect = styled.button`
  width: 335px;
  height: 54px;
  position: relative;
  padding-left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: right;
  color: #f3f3f3;

  border-style: none;
  border-bottom: 1px solid #f3f3f380;
  background: #161f37;
  border-radius: 200px;
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
    width: 199px;
    height: 56px;
  }
`;

export const PlaceholderWrap = styled.div`
  display: flex;
  align-items: center;

  color: ${({ selected }) => (!selected ? '#f3f3f380' : '#F3F3F3')};

  span {
    display: block;
  }
`;
export const Span = styled.span`
  margin-left: 24px;

  color: #f3f3f3;
  font-size: 14px;
  line-height: 1.29px;
  color: ${({ selected }) => (!selected ? '#f3f3f380' : '#F3F3F3')};
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    line-height: 1.56;
  }
`;

export const DropMenu = styled.div`
  max-height: 300px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  width: 335px;

  transition: 500ms linear color;

  &::-webkit-scrollbar {
    margin-top: 4px;
    width: 8px;
    background-color: transparent;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f3f3f380;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track-piece {
    background: transparent;
    margin-top: 18px;
    margin-bottom: 18px;
    margin-right: 4px;
  }

  position: absolute;
  top: 58px;
  right: 0;
  padding: 18px 24px;

  font-size: 12;
  line-height: 1.3;
  color: #f3f3f380;

  border-radius: 12px;
  background-color: #161f37;
  z-index: 10;

  div:not(:last-of-type) {
    margin-bottom: 6px;
  }

  div:hover,
  div:focus {
    color: #f3f3f3;
  }
  @media (min-width: 768px) {
    width: 199px;
    top: 60px;
    padding: 14px 23px;
  }
  @media (min-width: 1440px) {
    width: 199px;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 335px;

  @media (min-width: 768px) {
    width: 199px;
  }
`;

export const SelectItem = styled.div`
  cursor: pointer;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  color: #f3f3f3;

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    line-height: 1.56;
  }
`;

export const SearchInput = styled.input`
  display: block;
  padding: 4px;

  margin-bottom: 8px;

  font-size: 12;
  line-height: 1.3;
  color: #f3f3f380;
  width: 278px;
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

  @media (min-width: 768px) {
    width: 145px;
  }
`;
