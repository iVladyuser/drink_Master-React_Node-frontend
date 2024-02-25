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
import { selectAllDrinks, selectDrinksFilter } from '../../redux/drink/selectorsForDrinksPages';
import {
  setCategoryFilter,
  setIngredientFilter,
  setSearchQuery
} from '../../redux/drink/sliceFilterForDrinksPages';

const initialValues = {
  category: 'All categories',
  ingredients: 'Ingredients',
  keyWord: '',
};

const DrinksPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllDrinks);
  const filters = useSelector(selectDrinksFilter);
  const categories = useSelector(selectListsCategories); 
  const ingredients = useSelector(selectListsIngredients); 
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
    dispatch(searchDrinks(filters));
  }, [dispatch, categories, ingredients, filters]);


  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage + 1);
  };
  const handleCategorySelect = category => {
  
    dispatch(setCategoryFilter(category));
    dispatch(searchDrinks(filters)); 
  };

  const handleIngredientSelect = ingredient => {
    dispatch(setIngredientFilter(ingredient));
    dispatch(searchDrinks(filters)); 
  };
  const handleSearchInputChange = e => {
    const userQuery = e.target.value;
    const normalizedValue =userQuery.toLowerCase().trim()
    dispatch(setSearchQuery(normalizedValue));
    dispatch(searchDrinks(filters));
  };
  return (
    <DrinksPageStyle>
      <ContainerForPage>
        <Container>
          <TitlePage title={'Drinks'} />
          <WraperForm>
            <ForInputLupaSvg>
              <SearchDrinksInput 
              value={filters.searchQuery}
              onChange={handleSearchInputChange}
              />
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
            {items.map(drink => (
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
