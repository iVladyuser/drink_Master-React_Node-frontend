import styled from '@emotion/styled';

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

export const PlaceholderWrap = styled.div`
  display: flex;
  align-items: center;

  color: ${({ selected }) => (!selected ? '#f3f3f380' : '#F3F3F3')};

  span {
    display: block;
  }
`;

export const Label = styled.span`
  color: #f3f3f380;
`;

export const DropMenu = styled.div`
  max-height: 300px;
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
  top: 24px;
  right: 0;
  padding: 10px;

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
  padding: 4px;

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
