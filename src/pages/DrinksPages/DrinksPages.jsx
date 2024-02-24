import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import TitlePage from '../../components/TitlePage/TitlePage';
import SearchDrinksInput from '../../components/SearchDrinksInput/SearchDrinksInput';
import CustomSelect from 'components/CustomSelectForDrinksPage';
import SvgGeneratorSvgSelector from '../../components/SvgComponents';
import { Paginator } from '../../components/Pagination/Pagination';
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
import { getMainPageAllDrinks } from 'services/fetchDrinksForDrinksPages';
import { selectAllDrinks, selectVisibleDrinks } from '../../redux/drink/selectorsForDrinksPages';
import { setCategoryFilter, setIngredientFilter } from '../../redux/drink/sliceFilterForDrinksPages';
import { setCategories, setIngredients, selectSharedLists } from '../../redux/drink/sliceForListCategiriesIngredients'; // Импортируем новые действия и селектор

const initialValues = {
  category: 'All categories',
  ingredients: 'Ingredients',
};

const DrinksPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllDrinks);
  const visibleDrinks = useSelector(selectVisibleDrinks);
  const filters = useSelector(state => state.filters);
  const sharedLists = useSelector(selectSharedLists); // Новый селектор

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 11;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getMainPageAllDrinks({ page: currentPage, limit, filters }));
        const categories = response.payload.uniqueCategories;
        const ingredients = response.payload.uniqueIngredients;

        dispatch(setCategories(categories));
        dispatch(setIngredients(ingredients));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch, currentPage, limit, filters]);

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage + 1);
  };

  const handleCategorySelect = category => {
  
    const newCategory = category === 'Обнулить выбор' ? '' : category;
    dispatch(setCategoryFilter(newCategory));
  };

  const handleIngredientSelect = ingredient => {
  
    const newIngredient = ingredient === 'Обнулить выбор' ? '' : ingredient;
    dispatch(setIngredientFilter(newIngredient));
  };

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
                  <CustomSelect
                    items={['Обнулить выбор', ...sharedLists.categories]} 
                    title={'Category'}
                    onSelect={handleCategorySelect}
                  />
                  <CustomSelect
                    items={['Обнулить выбор', ...sharedLists.ingredients]} 
                    title={'Ingredients'}
                    onSelect={handleIngredientSelect}
                  />
                </FormStyled>
              )}
            </Formik>
          </WraperForm>
          <ListCocktail>
            {visibleDrinks.map(drink => (
              <ItemCocktail key={drink._id} drink={drink} />
            ))}
          </ListCocktail>
          <Paginator
            limit={limit}
            currentPage={currentPage}
            items={items.length}
            handlePageChange={handlePageChange}
            pageRangeDisplayed={5}
          />
        </Container>
      </ContainerForPage>
    </DrinksPageStyle>
  );
};

export default DrinksPage;





