import { selectVisibleDrinks } from '../../redux/drink/selectorsForDrinksPages';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TitlePage from '../../components/TitlePage/TitlePage';
import SearchDrinksInput from '../../components/SearchDrinksInput/SearchDrinksInput';
import { categoriesList } from '../../components/ForSelectValue/CategoriesList';
import { ingredientsList } from '../../components/ForSelectValue/IngredientsList';
import {
  Container,
  FormStyled,
  DrinksPageStyle,
  WraperForm,
  ForInputLupaSvg,
  WraperSvg,
  ContainerForPage,
  ListCocktail,
} from './DrinksPages.styled';
import ItemCocktail from '../../components/ItemCocktail/ItemCocktail';
import CustomSelect from 'components/CustomSelectForDrinksPage';
import { Formik } from 'formik';
import { getMainPageAllDrinks } from 'services/fetchDrinksForDrinksPages';
import SvgGeneratorSvgSelector from '../../components/SvgComponents';
import { Paginator } from '../../components/Pagination/Pagination';
import {
  selectAllDrinks,
  selectIsLoading,
  selectDrinksError,
} from '../../redux/drink/selectorsForDrinksPages';

const initialValues = {
  category: 'All categories',
  ingredients: 'Ingredients',
};

const DrinksPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllDrinks);
  console.log('Vladuser', items);
  const status = useSelector(selectIsLoading);
  const error = useSelector(selectDrinksError);
  const visibleDrinks = useSelector(selectVisibleDrinks);
  console.log('Vladik', visibleDrinks);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 11;

  useEffect(() => {
    dispatch(getMainPageAllDrinks({ page: currentPage, limit }));
  }, [dispatch, currentPage, limit]);

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage + 1);
  };

  const totalCount = items.length;

  if (status === 'loading') return <div>Loading...</div>;

  if (error) return <div>error</div>;

  //  if (error) return <ErrorPage />;

  // if (!items || items.length === 0) {
  //   return (
  //     <Container>
  //       <FavoritePageTitle>Favorites</FavoritePageTitle>
  //       <NoImg text="You haven't added any favorite cocktails yet." />
  //     </Container>
  //   );
  // }

  return (
    <DrinksPageStyle>
      <ContainerForPage>
        <Container>
          <TitlePage title={'Drinks'} />
          <WraperForm>
            <ForInputLupaSvg>
              <SearchDrinksInput />
              <WraperSvg>
                <SvgGeneratorSvgSelector id="svglupa" />
              </WraperSvg>
            </ForInputLupaSvg>
            <Formik initialValues={initialValues}>
              {({ setFieldValue }) => (
                <FormStyled>
                  <CustomSelect items={categoriesList} title={'Category'} />
                  <CustomSelect items={ingredientsList} title={'Ingredients'} />
                </FormStyled>
              )}
            </Formik>
          </WraperForm>
          <ListCocktail>
            {visibleDrinks.map(drink => (
              <ItemCocktail drink={drink} />
            ))}
          </ListCocktail>
          <Paginator
            limit={limit}
            currentPage={currentPage}
            items={totalCount}
            handlePageChange={handlePageChange}
            pageRangeDisplayed={5}
          />
        </Container>
      </ContainerForPage>
    </DrinksPageStyle>
  );
};

export default DrinksPage;
