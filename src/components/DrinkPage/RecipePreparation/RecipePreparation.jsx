import {
  RecipeSectWraper,
  RecipeSectTitle,
  RecipeDescrWrp,
  InstructionsWrp,
  InstructionsTxt,
  InstructionImgWrp,
} from './RecipePreparation.styled';
import InstructionImg from '../InstructionsImg';

const RecipePreparation = ({ cocktailInfo }) => {
  return (
    <RecipeSectWraper>
      <RecipeSectTitle>Recipe Preparation</RecipeSectTitle>
      <RecipeDescrWrp>
        <InstructionImgWrp>
          <InstructionImg />
        </InstructionImgWrp>
        {cocktailInfo ? (
          <InstructionsWrp>
            <InstructionsTxt>{cocktailInfo.description}</InstructionsTxt>
            <InstructionsTxt>{cocktailInfo.instructions}</InstructionsTxt>
            <InstructionsTxt>
              {cocktailInfo.instructionsDE ? cocktailInfo.instructionsDE : ''}
            </InstructionsTxt>
            <InstructionsTxt>
              {cocktailInfo.instructionsUK ? cocktailInfo.instructionsUK : ''}
            </InstructionsTxt>
          </InstructionsWrp>
        ) : (
          `Sorry, currently we don't have any information about the recipe for this cocktail...`
        )}
      </RecipeDescrWrp>
    </RecipeSectWraper>
  );
};

export default RecipePreparation;
