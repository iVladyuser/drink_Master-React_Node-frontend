import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerHome = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 375px;
  padding: 120px 20px 80px 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 123px 32px 140px 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 160px 100px 140px 100px;
  }
`;

export const DrinkCategoryTitle = styled.h2`
  font-weight: 600;
  color: ${({ theme }) => theme.button.buttonBg};
  font-size: 28px;
  line-height: 1.14; 
  margin-bottom: 24px;
  }
  
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1; 
    margin-bottom: 40px;
  }
`;

export const ItemsBox = styled.li`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const CategoryDrinkToDrink = styled(NavLink)`
  display: block;
  width: 163px;
  height: 46px;
  margin: 0 auto;
  margin-top: 60px;

  padding: 14px 39px;
  text-align: center;
  border-radius: 42px;
  font-weight: 600;

  line-height: 1.29;
  font-size: 14px;
  font-family: 'Manrope', sans-serif;

  color: ${({ theme }) => theme.button.buttonText};
  background-color: ${({ theme }) => theme.button.buttonBg};
  border: none;

  transition: color 300ms linear, background-color 300ms linear;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 183px;
    height: 54px;
    padding: 18px 43px;
    margin: 80px auto 0px;
  }

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.button.buttonBg};
    background-color: ${({ theme }) => theme.button.buttonText};
  }
`;
