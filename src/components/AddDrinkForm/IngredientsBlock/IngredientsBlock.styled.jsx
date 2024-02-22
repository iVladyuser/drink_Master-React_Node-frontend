import styled from 'styled-components';

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
`;

export const RemoveInredientBtn = styled.button`  
    margin-left: 188px;
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 18px;
    height: 18px;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
`;

export const IngredientsInput = styled.input`
border: transparent;
background-color: transparent;

&:hover,
&:focus {
  outline: transparent;
}

padding: 4px;
width: 100px;
font-family: "Manrope", sans-serif;
font-size: 17px;
line-height: 26.52px;
color: rgba(243, 243, 243, 1);

::placeholder {
  color: rgba(243, 243, 243, 0.5);
`;