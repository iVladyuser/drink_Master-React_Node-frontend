
import {DetailDrinkLink, DrinkPicture, DrinkName, LiForItem , WraperForNameAndLink} from './ItemCocktail.styled'

function ItemCocktail({_id, drinkThumb, drink}) {
  return (
    <LiForItem  key={_id}> 
    <DrinkPicture src={drinkThumb} width='400' height='400' alt={drink}/>
    <WraperForNameAndLink>
    <DrinkName>
      {drink}
    </DrinkName>
    <DetailDrinkLink to ={`/drink/${_id}`}>See more</DetailDrinkLink>
    </WraperForNameAndLink>
    </LiForItem>
  )
}

export default ItemCocktail