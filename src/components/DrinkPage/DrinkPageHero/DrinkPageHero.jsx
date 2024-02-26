import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import {
  addFavorite,
  deleteFavorite,
  fetchFavorites,
  selectAllFavorites,
} from '../../../services/FavoriteSlice';
import {
  HeroWraper,
  HeroTextWraper,
  GlassTypeAndServ,
  DrinkDescr,
  HeroImgWraper,
} from './DrinkPageHero.styled';
import {
  AddToFavoriteBtn,
  AddedToFavoriteBtn,
} from '../AddToFavBtn/AddToFavBtn';
import DrinkPageHeroImg from '../DrinkPageHeroImg/DrinkPageHeroImg';

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
          <AddedToFavoriteBtn
            onClick={handleRemoveFromFavorite}
          ></AddedToFavoriteBtn>
        ) : (
          <AddToFavoriteBtn onClick={handleAddToFavorite}></AddToFavoriteBtn>
        )}
      </HeroTextWraper>
      <HeroImgWraper>
        <DrinkPageHeroImg img={drinkThumb} alt={drink} />
      </HeroImgWraper>
    </HeroWraper>
  );
};

export default DrinkPageHero;
