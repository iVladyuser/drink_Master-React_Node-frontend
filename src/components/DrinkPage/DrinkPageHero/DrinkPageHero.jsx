import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import {
  HeroWraper,
  HeroTextWraper,
  GlassTypeAndServ,
  DrinkDescr,
  HeroImgWraper,
} from './DrinkPageHero.styled';
import AddToFavBtn from '../AddToFavBtn';
import DrinkPageHeroImg from '../DrinkPageHeroImg';

const DrinkPageHero = ({ drink }) => {
  return (
    <HeroWraper>
      <HeroTextWraper>
        <PageTitle title={drink.drink} />
        <GlassTypeAndServ>
          {drink.glass} / {drink.alcoholic}
        </GlassTypeAndServ>
        <DrinkDescr>{drink.description}</DrinkDescr>
        <AddToFavBtn>
          {/* btnName={favDrink ? 'Remove from favorites' : 'Add to favorite drinks'}
      onClick={handleFavAction} */}
        </AddToFavBtn>
      </HeroTextWraper>
      <HeroImgWraper>
        <DrinkPageHeroImg img={drink.drinkThumb} alt={drink.drink} />
      </HeroImgWraper>
    </HeroWraper>
  );
};

export default DrinkPageHero;
