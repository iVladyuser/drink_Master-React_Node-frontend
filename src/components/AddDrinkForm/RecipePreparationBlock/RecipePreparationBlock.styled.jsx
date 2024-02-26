import { styled } from 'styled-components';

export const RecipePreparationWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 20px;
`;

export const RecipeTextarea = styled.textarea`
  margin-top: 40px;
  width: 335px;
  height: 184px;
  padding: 14px 24px;
  box-sizing: border-box;
  outline: 1px solid ${({ theme }) => theme.fieldColor};
  border-radius: 20px;
  background-color: transparent;
  font-size: 16px;
  resize: none;

  font-family: 'Manrope', sans-serif;
  font-size: 17px;
  line-height: 26.52px;
  color: ${({ theme }) => theme.fieldColorFocus};

  ::placeholder {
    color: ${({ theme }) => theme.fieldColor};
  }

  @media (min-width: 768px) {
    width: 480px;
  }
`;

export const ErrorText = styled.div`
  margin-top: 4px;
  padding-left: 8px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: left;
`;
