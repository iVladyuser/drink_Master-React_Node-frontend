import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getIngredients } from '../../../services/fetchDrinkById&Ingredients';
import { getDrinkById } from '../../../services/fetchDrinkById&Ingredients';
import { selectDrinkById } from '../../../redux/drink/drink.selectors';
import {
  RecipeSectWraper,
  RecipeSectTitle,
  RecipeDescrWrp,
  InstructionsWrp,
  InstructionsTxt,
  InstructionImgWrp,
} from './RecipePreparation.styled';
import InstructionImg from '../InstructionsImg';

const RecipePreparation = () => {
  const drink = useSelector(selectDrinkById);
  const dispatch = useDispatch();
  const { drinkId } = useParams();

  console.log('drinkId: ', drinkId);

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);

  console.log('drink: ', drink);

  return (
    <RecipeSectWraper>
      <RecipeSectTitle>Recipe Preparation</RecipeSectTitle>
      <RecipeDescrWrp>
        <InstructionImgWrp>
          <InstructionImg />
        </InstructionImgWrp>
        {drink ? (
          <InstructionsWrp>
            <InstructionsTxt>{drink.description}</InstructionsTxt>
            <InstructionsTxt>{drink.instructions}</InstructionsTxt>
            <InstructionsTxt>
              {drink.instructionsDE ? drink.instructionsDE : ''}
            </InstructionsTxt>
            <InstructionsTxt>
              {drink.instructionsUK ? drink.instructionsUK : ''}
            </InstructionsTxt>
          </InstructionsWrp>
        ) : (
          'Sorry, no information about the recipe of this cocktail'
        )}
      </RecipeDescrWrp>
    </RecipeSectWraper>
  );
};

export default RecipePreparation;
