import styled from 'styled-components';

export const OptionsContainer = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 335px;
  max-height: ${({ height }) => (height ? height : '')};
  overflow-y: ${({ height }) => (height ? 'scroll' : 'visible')};
  overflow-x: hidden;
  padding: 18px 24px;
  background-color: ${({ theme }) => theme.button.buttonText};
  border-radius: 20px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 110px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: ${({ theme }) => theme.fieldColor};
  }

  &::-webkit-scrollbar-track {
    margin-block: 12px;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    padding: 14px 24px;
  }
`;

export const Option = styled.button`
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.button.buttonBg};
  font-family: 'Manrope';
  font-size: 18px;
  line-height: 1.29;
  text-align: start;
  transition: border-bottom 300ms linear;

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.button.buttonBg};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.56;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.button.buttonBg};
`;

export const Item = styled.li`
  width: 100%;
  /* margin-bottom: 10px; */
`;

export const Input = styled.input`
  display: block;
  padding: 4px;

  font-size: 12;
  line-height: calc(16 / 12);
  color: ${({ theme }) => theme.fieldColor};

  border-style: none;
  background-color: ${({ theme }) => theme.button.buttonText};
  border-bottom: 1px solid ${({ theme }) => theme.button.borderColor};

  &:focus {
    outline: transparent;
  }

  &::placeholder {
    color: ${({ theme }) => theme.fieldColor};
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
