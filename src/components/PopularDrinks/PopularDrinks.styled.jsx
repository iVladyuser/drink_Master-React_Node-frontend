import styled from 'styled-components';

export const PopularLi = styled.li`
  list-style: none;
  display: flex;
  width: 336px;
  height: 90px;
  border-radius: 20px;
  gap: 14px;
  margin-bottom: 24px;
`;

export const DrinkPicture = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 15px;
`;

export const DrinkName = styled.h4`
  font-family: Manrope;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #f3f3f3;
  margin-bottom: 8px;
`;

export const DrinkDescr = styled.p`
  font-family: Manrope;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgba(243, 243, 243, 0.5);
  text-overflow: ellipsis;
`;

export const PopularTextWrapper = styled.div`
  display: block;
`;

export const PopularTitle = styled.h3`
  margin-bottom: 28px;
`;
