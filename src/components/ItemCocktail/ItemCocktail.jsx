import {
  DetailDrinkLink,
  DrinkPicture,
  DrinkName,
  LiForItem,
  WraperForNameAndLink,
} from './ItemCocktail.styled';

function ItemCocktail({ id, drinkThumb, title }) {
  return (
    <LiForItem key={id}>
      <DrinkPicture src={drinkThumb} alt={title} />
      <WraperForNameAndLink>
        <DrinkName>{title}</DrinkName>
        <DetailDrinkLink to={`/drink/${id}`}>See more</DetailDrinkLink>
      </WraperForNameAndLink>
    </LiForItem>
  );
}

export default ItemCocktail;
