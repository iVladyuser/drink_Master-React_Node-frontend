import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDrinkById } from '../../../services/fetchDrinkById&Ingredients';
import { selectDrinkById } from '../../../redux/drink/drink.selectors';
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

const DrinkPageHero = () => {
  const drink = useSelector(selectDrinkById);
  const dispatch = useDispatch();
  const { drinkId } = useParams();

  console.log('drinkId: ', drinkId);

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);

  console.log('drink: ', drink);

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
