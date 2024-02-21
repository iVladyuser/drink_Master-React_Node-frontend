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
  color: #F3F3F3;
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
`

export const CategoryDrinkToDrink = styled(NavLink)`
  display: block;
  width: 164px;
  margin: 0 auto;
  margin-top: 60px;

  padding: 14px 40px;
  text-align: center;
  background: #f3f3f3;
  color: #161f37;
  border: 1px solid transparent;
  border-radius: 42px;
  font-weight: 600;

  line-height: 1.285;
  font-size: 14px;

  border: 1px solid #f3f3f3;
  transition: color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
  background-color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
  border-color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 184px;
    padding: 18px 44px;
    margin: 80px auto 0px;
  }

  &:hover,
  &:focus {
    color: #f3f3f3;
    background: #161f37;
    border-color: #161f37;
  }
`;
