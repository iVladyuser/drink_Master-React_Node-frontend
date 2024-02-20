import DrinkPlaceholder from 'images/heroImage/DrinkPlaceholder.jpg';

import {
  CategoryDrinksItem,
  CategoryDrinksIMG,
  CategoryDrinksTEXTDIV,
  CategoryDrinksP,
  CategoryDrinksLink,
} from './PreviewDrinks.styled';

export const ItemDrink = ({ drink }) => {
  const imageSrc = drink.drinkThumb || DrinkPlaceholder;
  return (
    <CategoryDrinksItem key={drink._id}>
      <CategoryDrinksIMG src={imageSrc} alt={drink.drink} />
      <CategoryDrinksTEXTDIV>
        <CategoryDrinksP>{drink.drink}</CategoryDrinksP>
        <CategoryDrinksLink to={`../drink/${drink._id}`}>
          See more
        </CategoryDrinksLink>
      </CategoryDrinksTEXTDIV>
    </CategoryDrinksItem>
  );
};
