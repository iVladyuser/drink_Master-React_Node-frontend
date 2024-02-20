import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getIngredients } from '../../../services/fetchDrinkById&Ingredients';
import { getDrinkById } from '../../../services/fetchDrinkById&Ingredients';
import { selectDrinkById } from '../../../redux/drink/drink.selectors';
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

const DrinkIngredientsList = () => {
  const drink = useSelector(selectDrinkById);
  const dispatch = useDispatch();
  const { drinkId } = useParams();

  console.log('drinkId: ', drinkId);

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);

  console.log('drink: ', drink);
  // const ingredients = useSelector(selectIngredients);
  // console.log('fullRecipe: ', fullRecipe);

  // let fullRecipe = [];

  // if (ingredients.length !== 0) {
  //   ingredients.map(ingredientInfoitem => {
  //     //   console.log(
  //     //     'ingredientInfoitem.ingredientId: ',
  //     //     ingredientInfoitem.ingredientId
  //     //   );

  //     // ingredients.map(item => console.log('item._id: ', item._id));

  //     const ingr = ingredients.find(
  //       ingredient =>
  //         JSON.stringify(ingredient._id) ===
  //         JSON.stringify(ingredientInfoitem.ingredientId)
  //     );

  //     // console.log('ingr: ', ingr);
  //     fullRecipe.push({
  //       ...ingr,
  //       measure: ingredientInfoitem.measure || '',
  //     });
  //     // console.log('fullRecipe: ', fullRecipe);

  //     return fullRecipe;
  //   });
  // }

  return (
    <IngredientsWraper>
      <IngredientsSectTitle>Ingredients</IngredientsSectTitle>
      {drink.ingredients.length !== 0 ? (
        <IngredientsList>
          {drink.ingredients.map(
            ({ title, measure, _id, ingredientThumb: { ingredientThumb } }) => (
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
