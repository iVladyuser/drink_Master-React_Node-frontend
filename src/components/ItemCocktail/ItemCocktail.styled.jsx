import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailDrinkLink = styled(Link)`
  font-family: inherite;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(243, 243, 243, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;
export const DrinkPicture = styled.img`
  width: 335px;
  height: 360px;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 398px;
  }
  @media screen and (min-width: 1440px) {
    
     width: 400px;
     height: 400px;
  }
`;
export const DrinkName = styled.h3`
  font-family: inherite;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
export const LiForItem = styled.li`
  list-style-type: none;
  width: 335px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    width: 342px;
    margin-top: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;
export const WraperForNameAndLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  @media screen and (min-width: 768px) {
    margin-top: 14px;
  }
`;
