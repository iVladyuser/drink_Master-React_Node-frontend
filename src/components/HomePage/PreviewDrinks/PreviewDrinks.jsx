import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDeviceType from 'hooks/useDeviceType';

import {CategoryDrinkToDrink,ContainerHome,DrinkCategoryTitle, ItemsBox} from './PreviewDrinks.styled';

import { drinksSelector } from '../../../redux/drink/drink.selectors';
import { getMainPageAllDrinks } from 'services/fetchDrinks';

import ItemCocktail from 'components/ItemCocktail/ItemCocktail';
import { ListCocktail } from 'pages/DrinksPages/DrinksPages.styled';

const categories = ['Ordinary Drink', 'Cocktail', 'Shake', 'Other/Unknown'];

const PreviewDrinks = () => {
  const drinks = useSelector(drinksSelector);
  const dispatch = useDispatch();
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  useEffect(() => {
    dispatch(getMainPageAllDrinks());
  }, [dispatch]);

  const renderFilteredDrinks = category => {
    const filteredDrinks = drinks.filter(drink => category === drink.category);

    if (isMobile) return filteredDrinks.slice(0, 1);
    if (isTablet) return filteredDrinks.slice(0, 2);
    if (isDesktop) return filteredDrinks.slice(0, 3);
    return filteredDrinks;
  };

  const renderCategories = () => {
    return categories.map(category => (
      <ItemsBox key={category}>
        <DrinkCategoryTitle>{category}</DrinkCategoryTitle>
        <ListCocktail>
          {renderFilteredDrinks(category).map(drink => (
            <ItemCocktail key={drink._id} drink={drink} />
          ))}
        </ListCocktail>
      </ItemsBox>
    ));
  };

  return (
    <ContainerHome>
      <ul>{renderCategories()}</ul>
      <div>
        <CategoryDrinkToDrink to="/drinks">Other drinks</CategoryDrinkToDrink>
      </div>
    </ContainerHome>
  );
};

export default PreviewDrinks;
