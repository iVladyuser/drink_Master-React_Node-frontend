import {
  DetailDrinkLink,
  DrinkPicture,
  DrinkName,
  LiForItem,
  WraperForNameAndLink,
} from './ItemCocktail.styled';

function ItemCocktail({ key, drinkThumb, title }) {
  return (
    <LiForItem key={key}>
      <DrinkPicture src={drinkThumb} alt={title} />
      <WraperForNameAndLink>
        <DrinkName>{title}</DrinkName>
        <DetailDrinkLink to={`/drink/${key}`}>See more</DetailDrinkLink>
      </WraperForNameAndLink>
    </LiForItem>
  );
}

export default ItemCocktail;
