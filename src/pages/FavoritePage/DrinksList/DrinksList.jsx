import React from 'react';
import { Link } from 'react-router-dom';
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
        <FavoriteDrinksItemContainer key={drink._id}>
          <FavoriteDrinkImage src={drink.drinkThumb} alt={drink.drink} />
          <FavoriteTitleWrap>
            <FavoriteDrinkTitle>{drink.drink}</FavoriteDrinkTitle>
            <FavoriteDrinkInfo>
              {drink.alcoholic === 'Alcoholic' ? 'Alcoholic' : 'Non-alcoholic'}
            </FavoriteDrinkInfo>
            <FavoriteDrinkDescription>
              {drink.description}
            </FavoriteDrinkDescription>
          </FavoriteTitleWrap>
          <ButtonsContainer>
            <FavoriteSeeMoreButton as={Link} to={`/drink/${drink._id}`}>
              See more
            </FavoriteSeeMoreButton>
            <FavoriteRemoveButton onClick={() => onRemoveClick(drink._id)}>
              <img src={icon} alt="trash" style={{ maxWidth: '24px' }} />
            </FavoriteRemoveButton>
          </ButtonsContainer>
        </FavoriteDrinksItemContainer>
      ))}
    </>
  );
};
