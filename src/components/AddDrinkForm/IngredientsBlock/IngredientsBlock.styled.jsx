import styled from 'styled-components';
import { Field } from 'formik';
import { RxCross2 } from 'react-icons/rx';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';

export const IngridientsWrapper = styled.div`
  margin-bottom: 80px;

  @media screen and (min-width: 1440px) {
    max-width: 540px;
  }
`;

export const AddIngredientWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;
`;

export const IngredientsInputWrapper = styled.div`
  position: relative;
  width: 100px;

  margin-right: 8px;

  @media screen and (min-width: 768px) {
    flex-basis: 20%;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 28%;
  }
`;

export const RemoveIngredientBtn = styled.button`
  display: block;
  padding: 0;
  border: none;
  background: none;
  color: ${({ theme }) => theme.fieldColor};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.fieldColorFocus};
  }

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const IngredientsInput = styled(Field)`
  /* width: 100px; */
  width: 100%;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 18px;

  background: transparent;
  border: 1px solid ${({ theme }) => theme.fieldColor};
  border-radius: 200px;

  font-size: 14px;
  line-height: calc(18 / 14);
  font-weight: 400;
  color: ${({ theme }) => theme.fieldColorFocus};

  &:focus {
    border: 1px solid ${({ theme }) => theme.fieldColorFocus};
    outline: none;
  }
`;

export const MinusBtn = styled.button``;

export const PlusBtn = styled.button``;

export const MinusIcon = styled(FaMinus)`
  color: ${({ theme }) => theme.fieldColorFocus};
  width: 16px;
  height: 16px;
`;

export const PlusIcon = styled(FaPlus)`
  color: ${({ theme }) => theme.fieldColorFocus};
  width: 16px;
  height: 16px;
`;

export const CrossIcon = styled(RxCross2)`
  color: ${({ theme }) => theme.fieldColorFocus};
  width: 20px;
  height: 20px;
`;

export const IngredientsTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 34px;
`;

export const PlusMinusBar = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.fieldColor};
  border-radius: 200px;

  button {
    display: flex;
    align-items: center;
    padding: 0;
    font-size: 16px;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.fieldColor};
  }

  button:hover,
  button:active {
    color: ${({ theme }) => theme.fieldColorFocus};
  }

  span {
    width: 20px;
    margin-left: 10px;
    margin-right: 10px;

    font-size: 14px;
    line-height: calc(18 / 14);
    text-align: center;
    color: ${({ theme }) => theme.fieldColorFocus};
  }
`;

export const NumberIngredients = styled.span``;

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
