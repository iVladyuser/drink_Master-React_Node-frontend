import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import DrinkPageHero from 'components/DrinkPage/DrinkPageHero';
import DrinkIngredientsList from 'components/DrinkPage/DrinkIngredientsList';
import RecipePreparation from 'components/DrinkPage/RecipePreparation';
import { Container } from './DrinkPage.styled';
import { selectDrinkById } from '../../redux/drink/drink.selectors';
import { getDrinkById } from '../../services/fetchDrinkById&Ingredients';

// import { selectError, selectIsLoading } from 'redux/selectors';

const DrinkPage = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const drink = useSelector(state => selectDrinkById(state));
  console.log('drink: ', drink);

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);

  return (
    <div>
      <Container>
        <DrinkPageHero cocktailData={drink} />
        <DrinkIngredientsList cocktailData={drink.ingredients} />
        <RecipePreparation cocktailData={drink} />
      </Container>
    </div>
  );
};

export default DrinkPage;
