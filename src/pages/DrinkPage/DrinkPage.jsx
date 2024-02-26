import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
import { getDrinkById } from 'services/fetchDrinkById';
import {
  selectDrinkById,
  selectErrorDrinkById,
  selectIsLoadingDrinkById,
} from '../../redux/drink/sliceDrinkById';
import { Container } from './DrinkPage.styled';
import { Loader } from 'components/Loader/Loader';
import DrinkPageHero from 'components/DrinkPage/DrinkPageHero';
import DrinkIngredientsList from 'components/DrinkPage/DrinkIngredientsList';
import RecipePreparation from 'components/DrinkPage/RecipePreparation';
import ErrorPage from 'pages/FavoritePage/ErrorPage';

const DrinkPage = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const isLoading = useSelector(selectIsLoadingDrinkById);
  const error = useSelector(selectErrorDrinkById);
  const drinkData = useSelector(selectDrinkById);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);

  return (
    <div>
      <Container>
        {error && <ErrorPage />}
        {isLoading && <Loader />}
        {drinkData !== null && (
          <>
            <DrinkPageHero cocktailInfo={drinkData} />
            <DrinkIngredientsList ingredients={drinkData.ingredients} />
            <RecipePreparation cocktailInfo={drinkData} />
          </>
        )}
      </Container>
    </div>
  );
};

export default DrinkPage;
