import styled from 'styled-components';
import { Field } from 'formik';


export const AddIngredientWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const IngredientsInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;
  padding: 0 24px;
  gap: 50px;
  height: 56px;
  width: 150px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.5);
  outline: transparent;
  background-color: transparent;
`;

export const RemoveIngredientBtn = styled.button`  
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 18px;
    height: 18px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const IngredientsInput = styled(Field)`
outline: transparent;
background-color: transparent;

border: 1px solid rgba(243, 243, 243, 0.5);
border-radius: 200px;
width: 101px;
height: 50px;
padding: 16px 18px;
margin-left: 8px;

&:hover,
&:focus {
  outline: transparent;
}

font-family: "Manrope", sans-serif;
font-size: 17px;
line-height: 26.52px;
color: rgba(243, 243, 243, 1);

::placeholder {
  color: rgba(243, 243, 243, 0.5);
`;

export const MinusBtn = styled.button`  
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 16px;
    height: 16px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const PlusBtn = styled.button`  
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 16px;
    height: 16px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const IngredientsTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`

export const PlusMinusBar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 77px;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;
  width: 104px;
  height: 38px;
  padding: 11px 16px;
`

export const NumberIngredients = styled.span`
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgba(243, 243, 243, 1);

`
export const ErrorText = styled.div`
  margin-top: 4px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  color: #da1414;
  text-align: right;
`;
