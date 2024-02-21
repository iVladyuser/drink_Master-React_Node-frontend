import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import DrinkPageHero from '../../components/DrinkPage/DrinkPageHero';
import DrinkIngredientsList from '../../components/DrinkPage/DrinkIngredientsList';
import RecipePreparation from '../../components/DrinkPage/RecipePreparation';
import { Container } from './DrinkPage.styled';
import { useState } from 'react';
import { getDrinkById } from 'services/fetchDrinkById';
import { Loader } from 'components/Loader/Loader';
// import { toast } from 'react-toastify';

const DrinkPage = () => {
  const { drinkId } = useParams();
  const [drinkData, setDrinkData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!drinkId) {
      return;
    }

    const fetchDrinkDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getDrinkById(drinkId);

        setDrinkData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDrinkDetails();
  }, [drinkId]);

  // console.log('drinkData: ', drinkData);

  return (
    <div>
      <Container>
        {error !== null && <p style={{ color: '#adadad' }}>{error}</p>}
        {isLoading && <Loader>Loading...</Loader>}
        {drinkData !== null && (
          <>
            <DrinkPageHero coctailInfo={drinkData} />
            <DrinkIngredientsList ingredients={drinkData.ingredients} />
            <RecipePreparation coctailInfo={drinkData} />
          </>
        )}

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
