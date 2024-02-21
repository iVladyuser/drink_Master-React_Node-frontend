import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMyDrinks,
  selectMyDrinksItems,
  selectMyDrinksStatus,
  selectMyDrinksError,
} from '../MyDrinksPage/MyDrinksSlice';
import { NoImg } from '../../pages/FavoritePage/NoImg';
import ErrorPage from '../../pages/FavoritePage/ErrorPage';
import { Paginator } from '../../components/Pagination/Pagination';
import { PageTitle } from '../../pages/FavoritePage/PageTitle/PageTitle';
import { DrinksList } from '../../pages/FavoritePage/DrinksList/DrinksList';
import { UniversalContainer } from '../../pages/FavoritePage/UniversalContainer/UniversalContainer';

export const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectMyDrinksItems);
  const status = useSelector(selectMyDrinksStatus);
  const error = useSelector(selectMyDrinksError);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    dispatch(fetchMyDrinks());
  }, [dispatch]);

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage);
  };

  const totalCount = drinks.length;

  return (
    <>
      <UniversalContainer>
        <PageTitle title="My Drinks" />
        {status === 'loading' && <div>Loading...</div>}
        {error && <ErrorPage />}
        {!error && drinks.length > 0 ? (
          <DrinksList drinks={drinks} />
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
      </UniversalContainer>
    </>
  );
};

export default MyDrinksPage;
