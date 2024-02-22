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
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  deleteFavorite,
  fetchFavorites,
  selectAllFavorites,
} from '../../../services/FavoriteSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DrinkPageHero = ({ cocktailInfo }) => {
  console.log('cocktailInfo: ', cocktailInfo);
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
  console.log('drinkId: ', drinkId);

  // useEffect(() => {
  //   dispatch(fetchFavorites());
  // }, [dispatch]);

  // const isFavorite = drinkId => {
  //   if (allFavorites) {
  //     return allFavorites.find(drink => drink._id === drinkId);
  //   }
  // };

  // console.log('allFavorites: ', allFavorites);
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
          btnName={
            isFavorite ? 'Remove from favorites' : 'Add to favorite drinks'
          }
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
