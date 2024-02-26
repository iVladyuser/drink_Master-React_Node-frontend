import PageTitle from '../PageTitle/PageTitle';
import {
  HeroWraper,
  HeroTextWraper,
  GlassTypeAndServ,
  DrinkDescr,
  HeroImgWraper,
} from './DrinkPageHero.styled';
import AddToFavBtn, { SVGwithText } from '../AddToFavBtn/AddToFavBtn';
import DrinkPageHeroImg from '../DrinkPageHeroImg/DrinkPageHeroImg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  deleteFavorite,
  fetchFavorites,
  selectAllFavorites,
} from '../../../services/FavoriteSlice';
import { useEffect } from 'react';

const DrinkPageHero = ({ cocktailInfo }) => {
  const dispatch = useDispatch();
  const allFavorites = useSelector(selectAllFavorites);

  const {
    _id: drinkId,
    drink,
    glass,
    alcoholic,
    description,
    drinkThumb,
  } = cocktailInfo;

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const isFavorite =
    allFavorites && allFavorites.some(drink => drink._id === drinkId);

  const handleAddToFavorite = () => {
    dispatch(addFavorite(drinkId));
  };

  const handleRemoveFromFavorite = () => {
    dispatch(deleteFavorite(drinkId));
  };

  return (
    <HeroWraper>
      <HeroTextWraper>
        <PageTitle title={drink} />
        <GlassTypeAndServ>
          {glass} / {alcoholic}
        </GlassTypeAndServ>
        <DrinkDescr>{description}</DrinkDescr>
        {isFavorite ? (
          <AddToFavBtn
            btnText={<SVGwithText />}
            bgсolor="#161f37"
            textcolor="#f3f3f3"
            onClick={handleRemoveFromFavorite}
          ></AddToFavBtn>
        ) : (
          <AddToFavBtn
            btnText="Add to favorite drinks"
            bgсolor="#f3f3f3"
            textcolor="#161f37"
            onClick={handleAddToFavorite}
          ></AddToFavBtn>
        )}
      </HeroTextWraper>
      <HeroImgWraper>
        <DrinkPageHeroImg img={drinkThumb} alt={drink} />
      </HeroImgWraper>
    </HeroWraper>
  );
};

export default DrinkPageHero;
