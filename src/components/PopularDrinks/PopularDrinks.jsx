import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopular } from 'services/fetchPopular';
import {
  PopularLi,
  DrinkPicture,
  PopularTextWrapper,
  DrinkDescr,
  DetailDrinkLink,
  PopularTitle,
} from './PopularDrinks.styled';
import { drinksSelector } from '../../redux/drink/drink.selectors';

const PopularDrinks = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(drinksSelector);

  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  const limitedDrinks = drinks.slice(0, 4);

  return (
    <div>
      <PopularTitle>Popular Drinks</PopularTitle>
      <div>
        {limitedDrinks.map(drink => (
          <PopularLi key={drink._id}>
            <DrinkPicture
              src={drink.drinkThumb}
              alt={drink.drink}
            ></DrinkPicture>
            <PopularTextWrapper>
              <DetailDrinkLink to={`/drink/${drink._id}`}>
                {drink.drink}
              </DetailDrinkLink>
              <DrinkDescr>{drink.shortDescription}</DrinkDescr>
            </PopularTextWrapper>
          </PopularLi>
        ))}
      </div>
    </div>
  );
};

export default PopularDrinks;
