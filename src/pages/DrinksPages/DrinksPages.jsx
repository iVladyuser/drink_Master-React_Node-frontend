import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import TitlePage from '../../components/TitlePage/TitlePage';
import SearchDrinksInput from '../../components/SearchDrinksInput/SearchDrinksInput';
import {categoriesList} from '../../components/ForSelectValue/CategoriesList';
import {ingredientsList} from '../../components/ForSelectValue/IngredientsList'
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
//import {ItemDrink} from '../../components/HomePage/PreviewDrinks/ItemDrink'
import ItemCocktail from '../../components/ItemCocktail/ItemCocktail';
import CustomSelect from 'components/CustomSelectForDrinksPage';
// import { Header } from '../../components/Header/Header';
import { Formik } from 'formik';
import { getMainPageAllDrinks } from 'services/fetchAllDrinks';
//import SvgGeneratorSvgSelector from '../../components/SvgComponents';
//import { Paginator } from '../../components/Pagination/Pagination';
import {drinksSelector,selectIsLoading, selectError} from '../../redux/drink/drink.selectors';

const initialValues = {
  category: 'All categories',
  ingredients: 'Ingredients',
};

const DrinksPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(drinksSelector);
  console.log(items[0]);
  const status = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const [currentPage, setCurrentPage] = useState(0);
  // const limit = 10;

  useEffect(() => {
    dispatch(getMainPageAllDrinks());
  }, [dispatch]);
  
  // const handlePageChange = selectedPage => {
  //   setCurrentPage(selectedPage);
  // }

  // const totalCount = items.length;

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
        {/* <Header /> */}
        <Container>
          <TitlePage title={'Drinks'} />
          <WraperForm>
            <ForInputLupaSvg>
              <SearchDrinksInput />
              <WraperSvg>
                {/* <SvgGeneratorSvgSelector id="svglupa" /> */}
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
          {items.map(drink => (
            <ItemCocktail
            key={uuidv4()}
              
              drinkThumb={drink.ingredientThumb}
              title={drink.title}
            />
          
          
            ))}
          </ListCocktail>
          {/* <Paginator
        limit={limit}
        currentPage={currentPage}
        items={totalCount}
        handlePageChange={handlePageChange}
        pageRangeDisplayed={9}
      /> */}
        </Container>
      </ContainerForPage>
    </DrinksPageStyle>
  );
};

export default DrinksPage;
