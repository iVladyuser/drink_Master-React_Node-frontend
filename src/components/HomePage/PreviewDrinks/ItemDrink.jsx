import DrinkPlaceholder from "images/heroImage/DrinkPlaceholder.jpg";

import {
  CategoryDrinksItem,
  CategoryDrinksIMG,
  CategoryDrinksTEXTDIV,
  CategoryDrinksP,
  CategoryDrinksLink,
} from './PreviewDrinks.styled';

export const ItemDrink = ({ item }) => {
  const { _id: id, drink, drinkThumb } = item;

  return (
    <CategoryDrinksItem key={id}>
      <CategoryDrinksIMG
        src={drinkThumb || DrinkPlaceholder}
        alt={drink}
        placeholder={!drinkThumb ? 'true' : 'false'}
      />
      <CategoryDrinksTEXTDIV>
        <CategoryDrinksP>{drink}</CategoryDrinksP>
        <CategoryDrinksLink to={`/drinks/${id}`}>See more</CategoryDrinksLink>
      </CategoryDrinksTEXTDIV>
    </CategoryDrinksItem>
  );
};