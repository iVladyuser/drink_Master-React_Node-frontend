import { styled } from 'styled-components';

export const AddIngredientWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
`;

export const IngredientsInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 50px;
  height: 56px;
  width: 150px;
  border-radius: 200px;
  border: 1px solid #0A0A1180;
`;

export const RemoveInredientBtn = styled.button`  
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