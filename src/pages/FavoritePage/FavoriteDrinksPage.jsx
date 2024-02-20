import React, { useEffect, useState } from 'react';
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

import { Paginator } from '../../components/Pagination/Pagination';
import { UniversalContainer } from '../../pages/FavoritePage/UniversalContainer/UniversalContainer';

import {
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
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const handleRemoveClick = drinkId => {
    dispatch(deleteFavorite(drinkId));
  };

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage);
  };

  const totalCount = items.length;

  return (
    <>
      <UniversalContainer>
        <FavoritePageTitle>Favorites</FavoritePageTitle>
        {status === 'loading' && <div>Loading...</div>}
        {error && <ErrorPage />}
        {items && items.length > 0 && (
          <>
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
                      <img
                        src={icon}
                        alt="trash"
                        style={{ maxWidth: '24px' }}
                      />
                    </FavoriteRemoveButton>
                  </ButtonsContainer>
                </FavoriteDrinksItemContainer>
              ))}
            </FavoriteDrinksList>
            <Paginator
              limit={limit}
              currentPage={currentPage}
              items={totalCount}
              handlePageChange={handlePageChange}
              pageRangeDisplayed={9}
            />
          </>
        )}
        {(!items || items.length === 0) && !error && (
          <NoImg text="You haven't added any favorite cocktails yet." />
        )}
      </UniversalContainer>
    </>
  );
};

export default FavoriteDrinksPage;
