import PageTitle from '../PageTitle/PageTitle';
import {
  HeroWraper,
  HeroTextWraper,
  GlassTypeAndServ,
  DrinkDescr,
  HeroImgWraper,
} from './DrinkPageHero.styled';
import AddToFavBtn from '../AddToFavBtn/AddToFavBtn';
import DrinkPageHeroImg from '../DrinkPageHeroImg/DrinkPageHeroImg';

const DrinkPageHero = ({ coctailInfo }) => {
  return (
    <HeroWraper>
      <HeroTextWraper>
        <PageTitle title={coctailInfo.drink} />
        <GlassTypeAndServ>
          {coctailInfo.glass} / {coctailInfo.alcoholic}
        </GlassTypeAndServ>
        <DrinkDescr>{coctailInfo.description}</DrinkDescr>
        <AddToFavBtn>
          {/* btnName={favDrink ? 'Remove from favorites' : 'Add to favorite drinks'}
      onClick={handleFavAction} */}
        </AddToFavBtn>
      </HeroTextWraper>
      <HeroImgWraper>
        <DrinkPageHeroImg
          img={coctailInfo.drinkThumb}
          alt={coctailInfo.drink}
        />
      </HeroImgWraper>
    </HeroWraper>
  );
};

export default DrinkPageHero;
