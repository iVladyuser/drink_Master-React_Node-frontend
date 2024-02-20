import React from 'react';
import {
  RecipeSectWraper,
  RecipeSectTitle,
  RecipeDescrWrp,
  InstructionsWrp,
  InstructionsTxt,
  InstructionImgWrp,
} from './RecipePreparation.styled';
import InstructionImg from '../InstructionsImg';

const RecipePreparation = ({ recipe }) => {
  return (
    <RecipeSectWraper>
      <RecipeSectTitle>Recipe Preparation</RecipeSectTitle>
      <RecipeDescrWrp>
        <InstructionImgWrp>
          <InstructionImg />
        </InstructionImgWrp>
        {recipe ? (
          <InstructionsWrp>
            <InstructionsTxt>{recipe.description}</InstructionsTxt>
            <InstructionsTxt>{recipe.instructions}</InstructionsTxt>
            <InstructionsTxt>
              {recipe.instructionsDE ? recipe.instructionsDE : ''}
            </InstructionsTxt>
            <InstructionsTxt>
              {recipe.instructionsUK ? recipe.instructionsUK : ''}
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
