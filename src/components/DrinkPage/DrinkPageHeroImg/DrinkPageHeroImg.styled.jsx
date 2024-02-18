import styled from 'styled-components';

export const CocktailImg = styled.img`
  width: 335px;
  height: 400px;

  @media (min-width: 768px) {
    width: 704px;
    height: 400px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    object-fit: cover;
    object-position: center top;
  }

  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;
