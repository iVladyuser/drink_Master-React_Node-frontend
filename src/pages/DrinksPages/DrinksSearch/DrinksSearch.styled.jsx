import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';

export const SearchIcon = styled(IoSearchOutline)`
  color: white;
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
  display: inline-block;
`;

export const Button = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 18px;
  right: 24px;
`;

export const Input = styled.input`
  padding: 0 24px;
  width: 335px;
  height: 54px;
  border-radius: 200px;
  background-color: transparent;
  border: 1px solid var(--border-input-color);
  opacity: 0.8;
  font-size: 17px;
  line-height: 1.56;
  color: var(--text-color);
  outline: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
  }

  &::placeholder {
    color: var(--text-color);
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`;

export const SearchIconWrap = styled.svg`
  stroke: var(--text-color);
  width: 20px;
  height: 20px;
`;
