import {
  CardContainer,
  CocktailInfo,
  CocktailName,
  Image,
  StyledCocktailLink,
} from './CocktailCard.styled';

import placeholder from '../../../images/drinksPage/block.jpg';
import plaseholder2x from '../../../images/drinksPage/block.jpg';

export const CocktailCard = ({ data }) => {
  const { _id: id, drink: cocktailName, drinkThumb: imgLink } = data;

  const isRetina = () => {
    if (window.matchMedia) {
      const mq = window.matchMedia('only screen and (min-resolution: 192dpi)');
      return mq.matches;
    }
    return false;
  };

  return (
    <CardContainer>
      <Image
        src={imgLink}
        alt={`${cocktailName} photo`}
        loading="lazy"
        onError={e => {
          e.target.src = isRetina() ? plaseholder2x : placeholder;
        }}
      />
      <CocktailInfo>
        <CocktailName>{cocktailName}</CocktailName>
        <StyledCocktailLink to={`/drinks/${id}`}>See more</StyledCocktailLink>
      </CocktailInfo>
    </CardContainer>
  );
};
