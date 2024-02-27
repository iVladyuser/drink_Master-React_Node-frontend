import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFavorites,
  deleteFavorite,
  selectAllFavorites,
  selectFavoritesStatus,
  selectFavoritesError,
} from '../../services/FavoriteSlice';
import { NoImg } from './NoImg';
import ErrorPage from './ErrorPage';
import { Paginator } from '../../components/Pagination/Pagination';
import { UniversalContainer } from '../../pages/FavoritePage/UniversalContainer/UniversalContainer';
import { PageTitle } from '../../pages/FavoritePage/PageTitle/PageTitle';
import { DrinksList } from '../../pages/FavoritePage/DrinksList/DrinksList';
import { FavoriteDrinksList } from './FavoriteDrinksPage.style';
import { Loader } from 'components/Loader/Loader';

export const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllFavorites);
  const status = useSelector(selectFavoritesStatus);
  const error = useSelector(selectFavoritesError);
  const [currentPage, setCurrentPage] = useState(0);

  const [limit, setLimit] = useState(window.innerWidth > 768 ? 9 : 8);

  useEffect(() => {
    const handleResize = () => {
      setLimit(window.innerWidth > 768 ? 9 : 8);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const handleRemoveClick = drinkId => {
    dispatch(deleteFavorite(drinkId));
  };

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage);
  };

  const startIndex = currentPage * limit;
  const selectedItems = items.slice(startIndex, startIndex + limit);

  return (
    <UniversalContainer>
      <PageTitle title="Favorites" />
      {status === 'loading' ? (
        <Loader />
      ) : error ? (
        <ErrorPage />
      ) : (
        <>
          {selectedItems.length > 0 ? (
            <FavoriteDrinksList>
              <DrinksList
                drinks={selectedItems}
                onRemoveClick={handleRemoveClick}
              />
            </FavoriteDrinksList>
          ) : (
            <NoImg text="You haven't added any favorite cocktails yet." />
          )}
          <Paginator
            limit={limit}
            currentPage={currentPage}
            items={items.length}
            handlePageChange={handlePageChange}
            pageRangeDisplayed={5}
          />
        </>
      )}
    </UniversalContainer>
  );
};

export default FavoriteDrinksPage;
