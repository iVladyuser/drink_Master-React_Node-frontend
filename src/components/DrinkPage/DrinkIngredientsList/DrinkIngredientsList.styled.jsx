import styled from 'styled-components';

export const IngredientsWraper = styled.section`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  @media (min-width: 1440px) {
    margin-bottom: 104px;
  }
`;

export const IngredientsSectTitle = styled.h2`
  margin-bottom: 42px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: rgba(243, 243, 243, 0.5);

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 21px 20px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 22px;
  }

  @media (min-width: 1440px) {
    gap: 35px;
    justify-content: left;
  }
`;

export const IngredientsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    gap: 14px;
  }
`;

export const IngredientsImgWrp = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(22, 31, 55, 0.5);
`;

export const IngredientsItemImg = styled.img`
  width: 157px;
  height: 157px;

  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export const IngredientsItemTxtWrp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IngredientsItemName = styled.h3`
  font-weight: 500;

  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const IngredientsItemDose = styled.p`
  font-weight: 500;
  color: rgba(243, 243, 243, 0.5);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const ErrorMsg = styled.p`
  font-size: 16px;
  line-height: 1.25;
  color: #f3f3f3;
`;
