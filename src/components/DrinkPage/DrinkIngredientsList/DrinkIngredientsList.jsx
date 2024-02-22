import {
  IngredientsWraper,
  IngredientsSectTitle,
  IngredientsList,
  IngredientsItem,
  IngredientsItemImg,
  IngredientsItemTxtWrp,
  IngredientsItemName,
  IngredientsItemDose,
  ErrorMsg,
  IngredientsImgWrp,
} from './DrinkIngredientsList.styled';
import IngredientPlaceholder from '../../../images/drinkPage/IngredientPlaceholder.jpg';

const DrinkIngredientsList = ({ ingredients }) => {
  // console.log('ingredients: ', ingredients);

  return (
    <IngredientsWraper>
      <IngredientsSectTitle>Ingredients</IngredientsSectTitle>
      {ingredients.length !== 0 ? (
        <IngredientsList>
          {ingredients.map(
            ({ title, measure, _id, ingredientId: { ingredientThumb } }) => (
              <IngredientsItem key={_id}>
                <IngredientsImgWrp>
                  <IngredientsItemImg
                    src={
                      ingredientThumb ? ingredientThumb : IngredientPlaceholder
                    }
                    alt={title}
                  />
                </IngredientsImgWrp>
                <IngredientsItemTxtWrp>
                  <IngredientsItemName>{title}</IngredientsItemName>
                  <IngredientsItemDose>
                    {measure ? measure : ''}
                  </IngredientsItemDose>
                </IngredientsItemTxtWrp>
              </IngredientsItem>
            )
          )}
        </IngredientsList>
      ) : (
        <ErrorMsg>Sorry, no information about ingredients</ErrorMsg>
      )}
    </IngredientsWraper>
  );
};

export default DrinkIngredientsList;
