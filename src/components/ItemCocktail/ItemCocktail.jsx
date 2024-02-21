import DrinkPlaceholder from 'images/heroImage/DrinkPlaceholder.jpg';

import {
  DetailDrinkLink,
  DrinkPicture,
  DrinkName,
  LiForItem,
  WraperForNameAndLink,
} from './ItemCocktail.styled';

function ItemCocktail({ drink}) {
  const imageSrc = drink.drinkThumb || DrinkPlaceholder;
  return (
    <LiForItem key={drink._id}>
      <DrinkPicture src={imageSrc} alt={drink.drink} />
      <WraperForNameAndLink>
        <DrinkName>{drink.drink}</DrinkName>
        <DetailDrinkLink to={`/drink/${drink._id}`}>See more</DetailDrinkLink>
      </WraperForNameAndLink>
    </LiForItem>
  );
}
export default ItemCocktail

