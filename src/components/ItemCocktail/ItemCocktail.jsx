import {
  DetailDrinkLink,
  DrinkPicture,
  DrinkName,
  LiForItem,
  WraperForNameAndLink,
} from './ItemCocktail.styled';

function ItemCocktail({ _id, drinkThumb, title }) {
  return (
    <LiForItem key={_id}>
      <DrinkPicture src={drinkThumb} alt={title} />
      <WraperForNameAndLink>
        <DrinkName>{title}</DrinkName>
        <DetailDrinkLink to={`/drink/${_id}`}>See more</DetailDrinkLink>
      </WraperForNameAndLink>
    </LiForItem>
  );
}

export default ItemCocktail;
