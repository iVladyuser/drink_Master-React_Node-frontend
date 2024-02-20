import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  CategoryDrinkToDrink,
  DrinkCategoryTitle,
  SectionContainer,
} from './PreviewDrinks.styled';

import { ItemDrink } from './ItemDrink';
import { drinksSelector } from '../../../redux/drink/drink.selectors';
import { getHomePageCocktails } from 'services/fetchDrinks';
import { Container } from 'styles/GlobalStyle';

const categories = ['Ordinary Drink', 'Cocktail', 'Shake', 'Other/Unknown'];

const PreviewDrinks = () => {
  const drinks = useSelector(drinksSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomePageCocktails());
  }, [dispatch]);

  return (
    <SectionContainer>
      <Container>
        <ul>
          {categories.map(category => (
            <li key={category}>
              <DrinkCategoryTitle>{category}</DrinkCategoryTitle>
              <ul>
                {drinks
                  .filter(drink => category === drink.category)
                  .map(drink => (
                    <ItemDrink key={drink._id} drink={drink} />
                  ))}
              </ul>
            </li>
          ))}
        </ul>
        <div>
          <CategoryDrinkToDrink to="/drinks">Other drinks</CategoryDrinkToDrink>
        </div>
      </Container>
    </SectionContainer>
  );
};

export default PreviewDrinks;
