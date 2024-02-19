import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFavorites,
  deleteFavorite,
  selectAllFavorites,
  selectFavoritesStatus,
  selectFavoritesError,
} from './FavoriteSlice';
import { NoImg } from './NoImg';
import ErrorPage from './ErrorPage';
import icon from './not-found-img/trash.svg';
import { Header } from '../../components/Header/Header';

import {
  Container,
  FavoritePageTitle,
  FavoriteDrinksList,
  FavoriteDrinksItemContainer,
  FavoriteDrinkImage,
  FavoriteTitleWrap,
  FavoriteDrinkTitle,
  FavoriteDrinkInfo,
  FavoriteDrinkDescription,
  FavoriteSeeMoreButton,
  FavoriteRemoveButton,
  ButtonsContainer,
} from './FavoriteDrinksPage.style';

export const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllFavorites);
  const status = useSelector(selectFavoritesStatus);
  const error = useSelector(selectFavoritesError);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const handleRemoveClick = drinkId => {
    dispatch(deleteFavorite(drinkId));
  };

  if (status === 'loading') return <div>Loading...</div>;

  if (error) return <ErrorPage />;

  if (!items || items.length === 0) {
    return (
      <Container>
        <FavoritePageTitle>Favorites</FavoritePageTitle>
        <NoImg text="You haven't added any favorite cocktails yet." />
      </Container>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <FavoritePageTitle>Favorites</FavoritePageTitle>
        <FavoriteDrinksList>
          {items.map(drink => (
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
                <FavoriteRemoveButton
                  onClick={() => handleRemoveClick(drink.id)}
                >
                  <img src={icon} alt="trash" style={{ maxWidth: '24px' }} />
                </FavoriteRemoveButton>
              </ButtonsContainer>
            </FavoriteDrinksItemContainer>
          ))}
        </FavoriteDrinksList>
      </Container>
    </>
  );
};

export default FavoriteDrinksPage;
