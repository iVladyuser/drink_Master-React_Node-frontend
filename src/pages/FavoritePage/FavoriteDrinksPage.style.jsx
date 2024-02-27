import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  padding-top: 80px;
  padding-bottom: 56px;
  padding-left: 20px;

  position: relative;

  @media (min-width: 768px) {
    width: 768px;
    padding: 140px 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 158px 100px;
  }
`;

export const FavoritePageTitle = styled.h1`
  width: 140x;
  height: 38px;
  left: 20px;
  top: 80px;
  color: ${({ theme }) => theme.colorText};
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 56px;
  }
  @media (min-width: 1440px) {
    font-size: 64px;
  }
`;

export const FavoriteDrinksList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 40px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 80px;
    column-gap: 20px;
    margin-top: 60px;
  }

  @media (min-width: 1280px) {
    margin-top: 62px;
  }
`;

export const FavoriteDrinksItemContainer = styled.li`
  display: block;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 40px;
  width: 100%;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 342px;
    margin-bottom: 0;
  }

  @media (min-width: 1280px) {
    width: 400px;
  }
`;

export const FavoriteDrinkImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 18px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.mainDarkTranspTwo} 51.18%,
    ${({ theme }) => theme.mainDarkTranspSeventySeven} 97.66%
  );

  @media (min-width: 375px) {
    height: 360px;
  }

  @media (min-width: 768px) {
    height: 360px;
  }

  @media (min-width: 1280px) {
    height: 400px;
  }
`;
export const FavoriteTitleWrap = styled.div`
  margin-bottom: 18px;
`;

export const FavoriteDrinkTitle = styled.h5`
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colorText};
`;

export const FavoriteDrinkInfo = styled.p`
  color: ${({ theme }) => theme.lightTextColor};
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 18px;
`;

export const FavoriteDrinkDescription = styled.p`
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 18px;
  height: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colorText};
`;

export const FavoriteSeeMoreButton = styled.button`
  padding: 14px 40px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
  border: none;
  outline: none;
  border-radius: 42px;
  background-color: var(--bluefifty-color);
  color: var(--main-white);
  cursor: pointer;
`;

export const FavoriteRemoveButton = styled.button`
  display: flex;
  width: 46px;
  padding: 11px 32px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: 10px;
  border: none;
  outline: none;
  border-radius: 40px;
  background-color: var(--bluefifty-color);
  cursor: pointer;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;
