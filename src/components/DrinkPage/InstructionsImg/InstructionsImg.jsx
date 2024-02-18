import { RecipeImg } from './InstructionsImg.styled';
import instructionsdesk1x from '../../../images/drinkPage/instructions-img-desk@1x.jpg';
import instructionsdesk2x from '../../../images/drinkPage/instructions-img-desk@2x.jpg';
import instructionsmob1x from '../../../images/drinkPage/instructions-img-mob@1x.jpg';
import instructionsmob2x from '../../../images/drinkPage/instructions-img-mob@2x.jpg';
import instructionstab1x from '../../../images/drinkPage/instructions-img-tab@1x.jpg';
import instructionstab2x from '../../../images/drinkPage/instructions-img-tab@2x.jpg';

const InstructionsImg = () => {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet={`${instructionsdesk1x} 1x, ${instructionsdesk2x} 2x`}
        type="image/jpg"
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${instructionstab1x} 1x, ${instructionstab2x} 2x`}
        type="image/jpg"
      />
      <source
        media="(min-width: 375px)"
        srcSet={`${instructionsmob1x} 1x, ${instructionsmob2x} 2x`}
        type="image/jpg"
      />

      <RecipeImg src={instructionsmob1x} alt="Cocktails image" />
    </picture>
  );
};

export default InstructionsImg;
