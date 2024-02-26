import styled from 'styled-components';

export const CommonContainer = styled.div`
  position: static;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 375px) {
    max-width: 375px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    max-width: 1440px;
  }
`;

export const DrinksSection = styled.section`
  overflow: hidden;
  max-width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 40px;
`;

export const CocktailsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    column-gap: 20px;
    row-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 80px;
  }
`;
