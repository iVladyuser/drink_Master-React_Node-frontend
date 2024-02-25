import {
  fetchCategories,
  fetchIngredients,
} from '../../services/fetchDrinksForDrinksPages'; // Импортируйте новые thunk-функции
import {
  selectListsCategories,
  selectListsIngredients,
} from '../../redux/drink/selectorsForDrinksPages'; // Импортируйте новые селекторы

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import TitlePage from '../../components/TitlePage/TitlePage';
import SearchDrinksInput from '../../components/SearchDrinksInput/SearchDrinksInput';
import CustomSelect from 'components/CustomSelectForDrinksPage';
import SvgGeneratorSvgSelector from '../../components/SvgComponents';
import { Paginator } from '../../components/Pagination/Pagination';
import { searchDrinks  } from 'services/fetchDrinksForDrinksPages';
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
import { selectVisibleDrinks } from '../../redux/drink/selectorsForDrinksPages';
import {
  setCategoryFilter,
  setIngredientFilter,
} from '../../redux/drink/sliceFilterForDrinksPages';

const initialValues = {
  category: 'All categories',
  ingredients: 'Ingredients',
  keyWord: '',
};

const DrinksPage = () => {
  const dispatch = useDispatch();

  const visibleDrinks = useSelector(selectVisibleDrinks);
  const filters = useSelector(state => state.filters);
  const categories = useSelector(selectListsCategories); // Используйте новый селектор
  const ingredients = useSelector(selectListsIngredients); // Используйте новый селектор

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 11;

  useEffect(() => {
    const fetchSharedLists = async () => {
      try {
        await dispatch(fetchCategories());
        await dispatch(fetchIngredients());
      } catch (error) {
        console.error('Error fetching shared lists:', error);
      }
    };

    fetchSharedLists();
  }, [dispatch]);

  useEffect(() => {
    console.log('Category:', categories);
    console.log('Ingredient:', ingredients);
    console.log('Filters:', filters);
    dispatch(searchDrinks(filters));
  }, [dispatch, categories, ingredients, filters]);


  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage + 1);
  };
  const handleCategorySelect = category => {
    console.log('Selected Category:', category);
    dispatch(setCategoryFilter(category));
    dispatch(searchDrinks(filters)); // Проверьте, отправляется ли запрос с новым фильтром
  };

  const handleIngredientSelect = ingredient => {
    console.log('Selected Ingredient:', ingredient);
    dispatch(setIngredientFilter(ingredient));
    dispatch(searchDrinks(filters)); // Вызываем поиск с учетом текущих фильтров
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
                    items={categories.map(category => category.name)}
                    title={'Category'}
                    onSelect={handleCategorySelect}
                  />
                  <CustomSelect
                    items={ingredients.map(ingredient => ingredient.title)}
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
            items={visibleDrinks.length}
            handlePageChange={handlePageChange}
            pageRangeDisplayed={5}
          />
        </Container>
      </ContainerForPage>
    </DrinksPageStyle>
  );
};

export default DrinksPage;
