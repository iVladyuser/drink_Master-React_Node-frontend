import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../../services/fetchDrinkById&Ingredients';
import { selectIngredients } from '../../../redux/drink/drink.selectors';
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

const DrinkIngredientsList = ({ ingredientInfo }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const ingredients = useSelector(selectIngredients);
  console.log('ingredients: ', ingredients);

  let fullRecipe = [];

  if (ingredientInfo.length !== 0) {
    ingredientInfo.map(ingredientInfoitem => {
      //   console.log(
      //     'ingredientInfoitem.ingredientId: ',
      //     ingredientInfoitem.ingredientId
      //   );

      // ingredients.map(item => console.log('item._id: ', item._id));

      const ingr = ingredients.find(
        ingredient =>
          JSON.stringify(ingredient._id) ===
          JSON.stringify(ingredientInfoitem.ingredientId)
      );

      // console.log('ingr: ', ingr);
      fullRecipe.push({
        ...ingr,
        measure: ingredientInfoitem.measure || '',
      });
      // console.log('fullRecipe: ', fullRecipe);

      return fullRecipe;
    });
  }

  return (
    <IngredientsWraper>
      <IngredientsSectTitle>Ingredients</IngredientsSectTitle>
      {fullRecipe.length !== 0 ? (
        <IngredientsList>
          {fullRecipe.map(({ title, measure, _id, ingredientThumb }) => (
            <IngredientsItem key={JSON.stringify(_id)}>
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
          ))}
        </IngredientsList>
      ) : (
        <ErrorMsg>Sorry, no information about ingredients</ErrorMsg>
      )}
    </IngredientsWraper>
  );
};

export default DrinkIngredientsList;
