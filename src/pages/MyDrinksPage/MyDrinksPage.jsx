import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMyDrinks,
  selectMyDrinksItems,
  selectMyDrinksStatus,
  selectMyDrinksError,
} from '../../services/MyDrinksSlice';
import { NoImg } from '../../pages/FavoritePage/NoImg';
import ErrorPage from '../../pages/FavoritePage/ErrorPage';
import { Paginator } from '../../components/Pagination/Pagination';
import { PageTitle } from '../../pages/FavoritePage/PageTitle/PageTitle';
import { DrinksList } from '../../pages/FavoritePage/DrinksList/DrinksList';
import { UniversalContainer } from '../../pages/FavoritePage/UniversalContainer/UniversalContainer';
import { FavoriteDrinksList } from 'pages/FavoritePage/FavoriteDrinksPage.style';
import { Loader } from 'components/Loader/Loader';
import { deleteMyDrink } from '../../services/MyDrinksSlice';

export const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectMyDrinksItems);
  const status = useSelector(selectMyDrinksStatus);
  const error = useSelector(selectMyDrinksError);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(window.innerWidth > 768 ? 9 : 8);

  useEffect(() => {
    dispatch(fetchMyDrinks());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setLimit(window.innerWidth > 768 ? 9 : 8);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage);
  };

  const handleRemoveClick = drinkId => {
    dispatch(deleteMyDrink(drinkId));
  };

  const startIndex = currentPage * limit;
  const selectedDrinks = drinks.slice(startIndex, startIndex + limit);
  const totalCount = drinks.length;

  return (
    <UniversalContainer>
      <PageTitle title="My Drinks" />
      {status === 'loading' ? (
        <Loader />
      ) : error ? (
        <ErrorPage />
      ) : (
        <>
          {selectedDrinks.length > 0 ? (
            <FavoriteDrinksList>
              <DrinksList
                drinks={selectedDrinks}
                onRemoveClick={handleRemoveClick}
              />
            </FavoriteDrinksList>
          ) : (
            <NoImg text="You haven't added any drinks yet." />
          )}
          <Paginator
            limit={limit}
            currentPage={currentPage}
            items={totalCount}
            handlePageChange={handlePageChange}
            pageRangeDisplayed={5}
          />
        </>
      )}
    </UniversalContainer>
  );
};

export default MyDrinksPage;
