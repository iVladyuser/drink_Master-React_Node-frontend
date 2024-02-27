import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';

export const SearchIcon = styled(FaSearch)`
  color: ${({ theme }) => theme.button.buttonBg};
  width: 26px;
  height: 26px;
`;

export const ClearIcon = styled(IoClose)`
  color: ${({ theme }) => theme.button.buttonBg};
  width: 35px;
  height: 35px;
`;

export const ButtonControls = styled.div`
  display: flex;
  position: relative;
  left: -64px;

  @media screen and(min-width: 768px) {
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 46px;
    flex-direction: row;
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 80px;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;

  @media screen and (min-width: 768px) {
    width: 264px;
  }
  @media screen and (min-width: 1440px) {
    width: 325px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0 15px;
  width: 335px;
  height: 54px;
  border-radius: 200px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.button.borderColor};
  opacity: 0.8;
  font-size: 17px;
  line-height: 1.56;
  color: ${({ theme }) => theme.button.buttonBg};
  outline: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
    padding-right: 70px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.button.buttonBg};
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`;
