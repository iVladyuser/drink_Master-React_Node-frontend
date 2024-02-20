import {
  DetailDrinkLink,
  DrinkPicture,
  DrinkName,
  LiForItem,
  WraperForNameAndLink,
} from './ItemCocktail.styled';

function ItemCocktail({ drink}) {
  //const imageSrc = drink.drinkThumb || DrinkPlaceholder;
  return (
    <LiForItem key={drink._id}>
      <DrinkPicture src={drink.drinkThumb} alt={drink.title} />
      <WraperForNameAndLink>
        <DrinkName>{drink.title}</DrinkName>
        <DetailDrinkLink to={`/drink/${drink._id}`}>See more</DetailDrinkLink>
      </WraperForNameAndLink>
    </LiForItem>
  );
}
export default ItemCocktail

