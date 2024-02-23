// import { selectVisibleDrinks } from '../../redux/drink/selectorsForDrinksPages';
// import React, { useEffect, useState } from 'react';

// import { useDispatch, useSelector } from 'react-redux';

// import TitlePage from '../../components/TitlePage/TitlePage';
// import SearchDrinksInput from '../../components/SearchDrinksInput/SearchDrinksInput';
// import { categoriesList } from '../../components/ForSelectValue/CategoriesList';
// import { ingredientsList } from '../../components/ForSelectValue/IngredientsList';
// import {
//   Container,
//   FormStyled,
//   DrinksPageStyle,
//   WraperForm,
//   ForInputLupaSvg,
//   WraperSvg,
//   ContainerForPage,
//   ListCocktail,
// } from './DrinksPages.styled';
// import ItemCocktail from '../../components/ItemCocktail/ItemCocktail';
// import CustomSelect from 'components/CustomSelectForDrinksPage';
// import { Formik } from 'formik';
// import { getMainPageAllDrinks } from 'services/fetchDrinksForDrinksPages';
// import SvgGeneratorSvgSelector from '../../components/SvgComponents';
// import { Paginator } from '../../components/Pagination/Pagination';
// import {
//   selectAllDrinks,
//   selectIsLoading,
//   selectDrinksError,
// } from '../../redux/drink/selectorsForDrinksPages';

// const initialValues = {
//   category: 'All categories',
//   ingredients: 'Ingredients',
// };

// const DrinksPage = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(selectAllDrinks);
  
//   const status = useSelector(selectIsLoading);
//   const error = useSelector(selectDrinksError);
//   const visibleDrinks = useSelector(selectVisibleDrinks);
 
//   const [currentPage, setCurrentPage] = useState(1);
//   const limit = 11;

//    useEffect(() => {
//      dispatch(getMainPageAllDrinks({ page: currentPage, limit }));
//    }, [dispatch, currentPage, limit]);

//    const handlePageChange = selectedPage => {
//      setCurrentPage(selectedPage + 1);
//   };
//    const totalCount = items.length;

//   if (status === 'loading') return <div>Loading...</div>;

//   if (error) return <div>error</div>;

//   //  if (error) return <ErrorPage />;

//   // if (!items || items.length === 0) {
//   //   return (
//   //     <Container>
//   //       <FavoritePageTitle>Favorites</FavoritePageTitle>
//   //       <NoImg text="You haven't added any favorite cocktails yet." />
//   //     </Container>
//   //   );
//   // }

//   const handleCategorySelect = category => {
//     console.log('Selected category:', category);
    
//   };

//   const handleIngredientSelect = ingredient => {
//     console.log('Selected ingredient:', ingredient);
  
//   };

//   return (
//     <DrinksPageStyle>
//       <ContainerForPage>
//         <Container>
//           <TitlePage title={'Drinks'} />
//           <WraperForm>
//             <ForInputLupaSvg>
//               <SearchDrinksInput />
//               <WraperSvg>
//                 <SvgGeneratorSvgSelector id="svglupa" />
//               </WraperSvg>
//             </ForInputLupaSvg>
//             <Formik initialValues={initialValues}>
//               {({ setFieldValue }) => (
//                 <FormStyled>
//                   <CustomSelect
//                     items={categoriesList}
//                     title={'Category'}
//                     onSelect={handleCategorySelect}
//                   />
//                   <CustomSelect
//                     items={ingredientsList}
//                     title={'Ingredients'}
//                     onSelect={handleIngredientSelect}
//                   />
//                 </FormStyled>
//               )}
//             </Formik>
//           </WraperForm>
//           <ListCocktail>
//             {visibleDrinks.map(drink => (
//               <ItemCocktail drink={drink} />
//             ))}
//           </ListCocktail>
//           <Paginator
//             limit={limit}
//             currentPage={currentPage}
//             items={totalCount}
//             handlePageChange={handlePageChange}
//             pageRangeDisplayed={5}
//           />
//         </Container>
//       </ContainerForPage>
//     </DrinksPageStyle>
//   );
// };

// export default DrinksPage;

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
import { categoriesList } from '../../components/ForSelectValue/CategoriesList'; 
import { ingredientsList } from '../../components/ForSelectValue/IngredientsList';
const initialValues = {
  category: 'All categories',
  ingredients: 'Ingredients',
};

const DrinksPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllDrinks);
  //  const status = useSelector(selectIsLoading);
  //  const error = useSelector(selectDrinksError);
  const visibleDrinks = useSelector(selectVisibleDrinks);
  const filters = useSelector(state => state.filters);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 11;
 
   console.log('item', items[0].ingredients[0].title);
  // console.log('Ingredient Filter:', filters.selectedIngredient);
  
  useEffect(() => {
    dispatch(getMainPageAllDrinks({ page: currentPage, limit, filters }));
  }, [dispatch, currentPage, limit, filters]);

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage + 1);
  };

  const handleCategorySelect = category => {
    dispatch(setCategoryFilter(category));
  };

  const handleIngredientSelect = ingredient => {
    dispatch(setIngredientFilter(ingredient));
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
                    items={categoriesList}
                    title={'Category'}
                    onSelect={handleCategorySelect}
                  />
                  <CustomSelect
                    items={ingredientsList}
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








