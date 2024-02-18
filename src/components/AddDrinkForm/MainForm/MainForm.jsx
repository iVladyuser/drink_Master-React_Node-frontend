import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useRef } from 'react';

import { AddButton, DrinkFormWrapper } from './MainForm.styled';

import TitleBlock from '../TitleBlock';
import IngredientsBlock from '../IngredientsBlock/';
// import RecipePreparationBlock from '../RecipePreparationBlock/';

// import { useFetchGlasses } from '../../../hooks/useFetchGlasses';
// import { useFetchCategories } from '../../../hooks/useFetchCategories';
// import { useFetchIngredients } from '../../../hooks/useFetchIngredients';

const validationSchema = yup.object().shape({
  file: yup
    .mixed()
    // .test('file', 'Please select a valid image file', value => {
    //   if (!value) return true;
    //   return value && value.type.startsWith('image/*');
    // })
    .required('Please add the drink recipe image'),
  title: yup.string().trim().required('Please enter a drink title'),
  recipe: yup.string().trim().required('Please enter about  recipe'),
  category: yup.string().required('Please select a category'),
  glass: yup.string().required('Please select a glass'),
  ingredients: yup
    .array()
    .of(
      yup.object().shape({
        title: yup.string().required('Please select a title'),
        measure: yup.string().required('Please enter a measure'),
      })
    )
    .required()
    .min(1, 'Select more than 1 item'),
  recipePreparation: yup
    .string()
    .trim()
    .required('Please enter about a recipe'),
});

const initialValues = {
  file: null,
  title: '',
  recipe: '',
  category: '',
  glass: '',
  alcoholicType: 'Alcoholic',
  ingredients: [],
  recipePreparation: '',
};

const MainForm = () => {
  const fileRef = useRef();

  const onSubmitForm = (data, action) => {
    action.resetForm();
    fileRef.current.value = null;
  };

  // const categories = useFetchCategories();
  // const glasses = useFetchGlasses();
  // const ingredients = useFetchIngredients();

  const categories = [
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
  const glasses = [
    'Highball glass',
    'Cocktail glass',
    'Old-fashioned glass',
    'Whiskey Glass',
    'Collins glass',
    'Pousse cafe glass',
    'Champagne flute',
    'Whiskey sour glass',
    'Cordial glass',
    'Brandy snifter',
    'White wine glass',
    'Nick and Nora Glass',
    'Hurricane glass',
    'Coffee mug',
    'Shot glass',
    'Jar',
    'Irish coffee cup',
    'Punch bowl',
    'Pitcher',
    'Pint glass',
    'Copper Mug',
    'Wine Glass',
    'Beer mug',
    'Margarita/Coupette glass',
    'Beer pilsner',
    'Beer Glass',
    'Parfait glass',
    'Mason jar',
    'Margarita glass',
    'Martini Glass',
    'Balloon Glass',
    'Coupe Glass',
  ];

  return (
    <DrinkFormWrapper>
      <h2>Add drink</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitForm}
      >
        {({ setFieldValue, touched, errors }) => (
          <Form>
            <TitleBlock
              categoriesList={categories}
              glassesList={glasses}
              setValue={setFieldValue}
              errors={errors}
              touched={touched}
              fileRef={fileRef}
            />
            <IngredientsBlock />
            {/* <RecipePreparationBlock /> */}
            <AddButton>Add</AddButton>
          </Form>
        )}
      </Formik>
    </DrinkFormWrapper>
  );
};

export default MainForm;
