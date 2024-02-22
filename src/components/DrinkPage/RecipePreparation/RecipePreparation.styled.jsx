import styled from 'styled-components';

export const RecipeSectWraper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;

export const RecipeSectTitle = styled.h2`
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 60px;
  }
`;

export const RecipeDescrWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (min-width: 1440px) {
    gap: 60px;
    flex-direction: row;
  }
`;

export const InstructionsWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: left;
  justify-content: space-between;
`;

export const InstructionsTxt = styled.p`
  font-size: 16px;
  line-height: 1.38;
`;

export const InstructionImgWrp = styled.div`
  margin-right: auto;
  margin-left: auto;
  flex-shrink: 0;
  /* border-radius: 8px; */
  border-radius: 10px;
  overflow: hidden;
`;
