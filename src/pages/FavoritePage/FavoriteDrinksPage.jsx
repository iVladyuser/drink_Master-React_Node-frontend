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

import { Paginator } from '../../components/Pagination/Pagination';
import { UniversalContainer } from '../../pages/FavoritePage/UniversalContainer/UniversalContainer';
import { PageTitle } from '../../pages/FavoritePage/PageTitle/PageTitle';
import { DrinksList } from '../../pages/FavoritePage/DrinksList/DrinksList';

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
        <PageTitle title="Favorites" />
        {status === 'loading' && <div>Loading...</div>}
        {error && <ErrorPage />}
        {!error && items.length > 0 ? (
          <DrinksList drinks={items} onRemoveClick={handleRemoveClick} />
        ) : (
          <NoImg text="You haven't added any favorite cocktails yet." />
        )}
        <Paginator
          limit={limit}
          currentPage={currentPage}
          items={totalCount}
          handlePageChange={handlePageChange}
          pageRangeDisplayed={5}
        />
      </UniversalContainer>
    </>
  );
};

export default FavoriteDrinksPage;
