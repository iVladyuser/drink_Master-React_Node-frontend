import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardContainer = styled.div`
  width: 100%;
  max-height: 392px;
  transition: border-bottom 700ms linear;
  border-bottom: 1px solid var(--background-color);

  &:hover,
  &:focus,
  &:active {
    border-bottom: 1px solid var(--card-hover);
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
    max-height: 398px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    max-height: 438px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 360px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const CocktailInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
`;

export const CocktailName = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.12;
  color: var(--text-color);

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.33;
  }
`;

export const StyledCocktailLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: var(--see-more-link-color);
  transition: color 250ms linear;

  &:hover,
  &:focus,
  &:active {
    color: var(--see-more-link-hover);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;
