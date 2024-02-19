import TitlePage from '../../components/TitlePage/TitlePage';
import SearchDrinksInput from '../../components/SearchDrinksInput/SearchDrinksInput';
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
import { Header } from '../../components/Header/Header';
import { Formik } from 'formik';
import SvgGeneratorSvgSelector from '../../components/SvgComponents';
const categoriesList = [
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other/Unknown',
  'Cocoa',
  'Shot',
  'Coffee/Tea',
  'Homemade Liqueur',
  'Punch/Party Drink',
  'Beer',
  'Soft Drink',
];

const ingredientsList = [
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other/Unknown',
  'Cocoa',
  'Shot',
  'Coffee/Tea',
  'Homemade Liqueur',
  'Punch/Party Drink',
  'Beer',
  'Soft Drink',
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other/Unknown',
  'Cocoa',
  'Shot',
  'Coffee/Tea',
  'Homemade Liqueur',
  'Punch/Party Drink',
  'Beer',
  'Soft Drink',
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other/Unknown',
  'Cocoa',
  'Shot',
  'Coffee/Tea',
  'Homemade Liqueur',
  'Punch/Party Drink',
  'Beer',
  'Soft Drink',
];

const initialValues = {
  category: 'All categories',
  ingredients: 'Ingredients',
};

const DrinksPage = () => {
  return (
    <DrinksPageStyle>
      <ContainerForPage>
        <Header />
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
            <ItemCocktail
              _id={'12345678'}
              drinkThumb={
                'https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg'
              }
              drink={'Juse'}
            />
            <ItemCocktail
              _id={'12345678'}
              drinkThumb={
                'https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg'
              }
              drink={'Juse'}
            />
            <ItemCocktail
              _id={'12345678'}
              drinkThumb={
                'https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg'
              }
              drink={'Juse'}
            />
            <ItemCocktail
              _id={'12345678'}
              drinkThumb={
                'https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg'
              }
              drink={'Juse'}
            />
          </ListCocktail>
        </Container>
      </ContainerForPage>
    </DrinksPageStyle>
  );
};

export default DrinksPage;
