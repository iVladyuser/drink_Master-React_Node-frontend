// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import DrinkPageHero from '../../components/DrinkPage/DrinkPageHero';
import DrinkIngredientsList from '../../components/DrinkPage/DrinkIngredientsList';
import RecipePreparation from '../../components/DrinkPage/RecipePreparation';
import { Container } from './DrinkPage.styled';
// import {
//   selectDrinkById,
//   selectError,
//   selectIsLoading,
// } from '../../redux/drink/drink.selectors';
// import { getDrinkById } from '../../services/fetchDrinkById&Ingredients';
// import { Loader } from 'components/Loader/Loader';

const DrinkPage = () => {
  // const dispatch = useDispatch();
  // const { drinkId } = useParams();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const drink = useSelector(state => selectDrinkById(state));
  // console.log('drink: ', drink);

  // useEffect(() => {
  //   dispatch(getDrinkById(drinkId));
  // }, [dispatch, drinkId]);

  return (
    <div>
      <Container>
        {/* {isLoading && !error && <Loader />} */}
        <DrinkPageHero />
        <DrinkIngredientsList />
        <RecipePreparation />
        {/* {error &&
          toast.error(
            `Oops, some error occured... Please try reloading the page`
          )} */}
        {/* <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        /> */}
      </Container>
    </div>
  );
};

export default DrinkPage;
