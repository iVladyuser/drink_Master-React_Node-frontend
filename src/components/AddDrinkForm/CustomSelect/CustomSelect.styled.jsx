import styled from 'styled-components';

export const CustomSelectWrapper = styled.button`
  width: 100%;
  height: 34px;
  padding-bottom: 14px;
  padding-left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: right;
  color: ${({ theme }) => theme.colorText};

  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.fieldColor};
  background: transparent;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.fieldColorFocus};

    outline: transparent;
  }

  &:focus span,
  &:hover span {
    color: ${({ theme }) => theme.fieldColorFocus};
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

  color: ${({ selected, theme }) =>
    !selected ? theme.fieldColor : theme.fieldColorFocus};

  span {
    display: block;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.fieldColor};
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
  top: 24px;
  right: 0;
  padding: 10px;

  font-size: 12;
  line-height: 1.3;
  color: ${({ theme }) => theme.fieldColor};

  border-radius: 12px;
  background-color: ${({ theme }) => theme.selectBgc};
  z-index: 10;

  div:not(:last-of-type) {
    margin-bottom: 6px;
  }

  div:hover,
  div:focus {
    color: ${({ theme }) => theme.fieldColorFocus};
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
  color: ${({ theme }) => theme.fieldColor};

  border-style: none;
  background-color: ${({ theme }) => theme.selectBgc};
  border-bottom: 1px solid ${({ theme }) => theme.fieldColor};

  &:focus {
    color: ${({ theme }) => theme.fieldColor};
    outline: transparent;
  }

  &::placeholder {
    color: ${({ theme }) => theme.fieldColor};
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
