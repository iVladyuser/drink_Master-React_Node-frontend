import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailDrinkLink = styled(Link)``;

export const PopularLi = styled.li`
  list-style: none;
  display: flex;
  width: 336px;
  height: 90px;
  border-radius: 15px;
  gap: 14px;
  margin-bottom: 24px;
  align-items: center;
`;

export const DrinkPicture = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 15px;
`;

export const DrinkDescr = styled.p`
  font-family: Manrope;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.fieldColor};
  text-overflow: ellipsis;
`;

export const DrinkName = styled.p`
  font-family: Manrope;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.fieldColorFocus};
  margin-bottom: 8px;
`;

export const PopularTextWrapper = styled.div`
  display: block;
`;

export const PopularTitle = styled.h3`
  margin-bottom: 28px;
`;
