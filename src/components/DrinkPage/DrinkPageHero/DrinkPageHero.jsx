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
    console.log('added_id: ', drinkId);
  };

  const handleRemoveFromFavorite = () => {
    dispatch(deleteFavorite(drinkId));
    console.log('deleted_id: ', drinkId);
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
            bg="darkblue"
            color="white"
            onClick={handleRemoveFromFavorite}
          ></AddToFavBtn>
        ) : (
          <AddToFavBtn
            btnText="Add to favorite drinks"
            bg="white"
            color="darkblue"
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
