import React from 'react';
import {
  FavoriteDrinksItemContainer,
  FavoriteDrinkImage,
  FavoriteTitleWrap,
  FavoriteDrinkTitle,
  FavoriteDrinkInfo,
  FavoriteDrinkDescription,
  ButtonsContainer,
  FavoriteSeeMoreButton,
  FavoriteRemoveButton,
} from '../FavoriteDrinksPage.style';
import icon from '../not-found-img/trash.svg';

export const DrinksList = ({ drinks, onRemoveClick }) => {
  return (
    <>
      {drinks.map(drink => (
        <FavoriteDrinksItemContainer key={drink.id}>
          <FavoriteDrinkImage src={drink.image} alt={drink.name} />
          <FavoriteTitleWrap>
            <FavoriteDrinkTitle>{drink.name}</FavoriteDrinkTitle>
            <FavoriteDrinkInfo>
              {drink.isAlcoholic ? 'Alcoholic' : 'Non-alcoholic'}
            </FavoriteDrinkInfo>
            <FavoriteDrinkDescription>
              {drink.description}
            </FavoriteDrinkDescription>
          </FavoriteTitleWrap>
          <ButtonsContainer>
            <FavoriteSeeMoreButton>See More</FavoriteSeeMoreButton>
            <FavoriteRemoveButton onClick={() => onRemoveClick(drink.id)}>
              <img src={icon} alt="trash" style={{ maxWidth: '24px' }} />
            </FavoriteRemoveButton>
          </ButtonsContainer>
        </FavoriteDrinksItemContainer>
      ))}
    </>
  );
};
