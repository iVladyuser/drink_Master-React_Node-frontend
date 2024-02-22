import {
  RecipeSectWraper,
  RecipeSectTitle,
  RecipeDescrWrp,
  InstructionsWrp,
  InstructionsTxt,
  InstructionImgWrp,
} from './RecipePreparation.styled';
import InstructionImg from '../InstructionsImg';

const RecipePreparation = ({ coctailInfo }) => {
  // console.log('instructions: ', coctailInfo);

  return (
    <RecipeSectWraper>
      <RecipeSectTitle>Recipe Preparation</RecipeSectTitle>
      <RecipeDescrWrp>
        <InstructionImgWrp>
          <InstructionImg />
        </InstructionImgWrp>
        {coctailInfo ? (
          <InstructionsWrp>
            <InstructionsTxt>{coctailInfo.description}</InstructionsTxt>
            <InstructionsTxt>{coctailInfo.instructions}</InstructionsTxt>
            <InstructionsTxt>
              {coctailInfo.instructionsDE ? coctailInfo.instructionsDE : ''}
            </InstructionsTxt>
            <InstructionsTxt>
              {coctailInfo.instructionsUK ? coctailInfo.instructionsUK : ''}
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
