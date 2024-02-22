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
import { useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../../services/FavoriteSlice';

const DrinkPageHero = ({ cocktailInfo }) => {
  const dispatch = useDispatch();

  const {
    _id: drinkId,
    drink,
    glass,
    alcoholic,
    description,
    drinkThumb,
  } = cocktailInfo;

  let isFavorite = false;
  const handleFavAction = () => {
    if (!isFavorite) {
      dispatch(addFavorite(drinkId));
      console.log('added_id: ', drinkId);
    } else {
      dispatch(deleteFavorite(drinkId));
    }
  };

  return (
    <HeroWraper>
      <HeroTextWraper>
        <PageTitle title={drink} />
        <GlassTypeAndServ>
          {glass} / {alcoholic}
        </GlassTypeAndServ>
        <DrinkDescr>{description}</DrinkDescr>
        <AddToFavBtn
          btnName={isFavorite ? 'Added to favorites' : 'Add to favorite drinks'}
          onClick={handleFavAction}
        ></AddToFavBtn>
      </HeroTextWraper>
      <HeroImgWraper>
        <DrinkPageHeroImg img={drinkThumb} alt={drink} />
      </HeroImgWraper>
    </HeroWraper>
  );
};

export default DrinkPageHero;
