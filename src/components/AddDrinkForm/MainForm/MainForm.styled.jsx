import { styled } from 'styled-components';

export const DrinkFormWrapper = styled.div`
  @media (min-width: 1440px) {
    flex-basis: 67%;
    margin-right: 94px;
  }
`;

export const AddButton = styled.button`
  padding: 14px 40px;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  color: #161f37;
  line-height: calc(18 / 14);

  background-color: #f3f3f3;
  border: none;
  border-radius: 42px;

  transition: color 300ms linear, background-color 300ms linear;

  &:focus,
  &:hover {
    color: #f3f3f3;
    background-color: #161f37;
  }
`;

export const MainFormTitle = styled.h2`
  margin-bottom: 60px;
`