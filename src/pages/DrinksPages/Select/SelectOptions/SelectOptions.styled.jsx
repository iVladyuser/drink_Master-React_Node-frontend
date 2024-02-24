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
  background-color: var(--select-list-color);
  border-radius: 20px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 110px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: var(--scroll-color);
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
  color: var(--see-more-link-color);
  font-family: 'Manrope';
  font-size: 14px;
  line-height: 1.29;
  text-align: start;
  transition: border-bottom 300ms linear;

  &:hover,
  &:focus,
  &:active {
    color: var(--text-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.56;
  }
`;

export const Text = styled.p`
  color: var(--text-color);
`;

export const Item = styled.li`
  width: 100%;
  /* margin-bottom: 10px; */
`;

export const Input = styled.input`
  /* width: 100%;
  height: 35px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--border-input-color);
  opacity: 0.8;
  padding: 0 12px;

  font-size: 14px;
  line-height: 1.29;
  color: var(--text-color);
  outline: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1); */

  display: block;
  padding: 4px;

  /* margin-bottom: 8px; */

  font-size: 12;
  line-height: calc(16 / 12);
  color: var(--see-more-link-color);

  border-style: none;
  background-color: var(--button-hover-color);
  border-bottom: 1px solid #f3f3f311;

  &:focus {
    color: var(--text-color);
    outline: transparent;
  }

  &::placeholder {
    color: var(--see-more-link-color);
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
