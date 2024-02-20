import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  CategoryDrinkToDrink,
  DrinkCategoryTitle,
  MainWrapper,
  SectionContainer,
} from './PreviewDrinks.styled';

import { ItemDrink } from './ItemDrink';
import { drinksSelector } from '../../../redux/drink/drink.selectors';

import { getMainPageAllDrinks } from 'services/fetchDrinks';
import useDeviceType from 'hooks/useDeviceType';
import { Container } from 'styles/GlobalStyle';

const categories = ['Ordinary Drink', 'Cocktail', 'Shake', 'Other/Unknown'];


const PreviewDrinks = () => {
  const drinks = useSelector(drinksSelector);
  const dispatch = useDispatch();
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  useEffect(() => {
    dispatch(getMainPageAllDrinks());
  }, [dispatch]);

  const renderFilteredDrinks = (category) => {
    const filteredDrinks = drinks.filter(drink => category === drink.category);
    
    if (isMobile) return filteredDrinks.slice(0, 1);
    if (isTablet) return filteredDrinks.slice(0, 2);
    if (isDesktop) return filteredDrinks.slice(0, 4);
    return filteredDrinks;
  };

  const renderCategories = () => {
    return categories.map(category => (
      <li key={category}>
        <DrinkCategoryTitle>{category}</DrinkCategoryTitle>
        <ul>
          {renderFilteredDrinks(category).map(drink => (
            <ItemDrink key={drink._id} drink={drink} />
          ))}
        </ul>
      </li>
    ));
  };

  return (
    <SectionContainer>
      <Container>
      <MainWrapper>
        <ul>
          {renderCategories()}
        </ul>
        <div>
          <CategoryDrinkToDrink to="/drinks">Other drinks</CategoryDrinkToDrink>
        </div>
      </MainWrapper>
      </Container>
    </SectionContainer>
  );
};

export default PreviewDrinks;