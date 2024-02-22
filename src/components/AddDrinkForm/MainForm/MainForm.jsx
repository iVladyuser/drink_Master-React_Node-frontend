import { Formik, Form } from 'formik';
import * as yup from 'yup';
// import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AddButton, DrinkFormWrapper } from './MainForm.styled';

import TitleBlock from '../TitleBlock';
import { addOwnDrinkThunk } from 'services/fetchOwnDrinks';
// import IngredientsBlock from '../IngredientsBlock/';
// import RecipePreparationBlock from '../RecipePreparationBlock/';

// import { useFetchGlasses } from '../../../hooks/useFetchGlasses';
// import { useFetchCategories } from '../../../hooks/useFetchCategories';
// import { useFetchIngredients } from '../../../hooks/useFetchIngredients';

const validationSchema = yup.object().shape({
  // file: yup
  //   .mixed()
  //   .required('Please add the drink recipe image'),
  drink: yup.string().trim().required('Please enter a drink title'),
  description: yup.string().trim().required('Please enter about  recipe'),
  category: yup.string().required('Please select a category'),
  glass: yup.string().required('Please select a glass'),
  // ingredients: yup
  //   .array()
  //   .of(
  //     yup.object().shape({
  //       title: yup.string().required('Please select a title'),
  //       measure: yup.string().required('Please enter a measure'),
  //     })
  //   )
  //   .required()
  // //   .min(1, 'Select more than 1 item'),
  // recipePreparation: yup
  //   .string()
  //   .trim()
  //   .required('Please enter about a recipe'),
});

const initialValues = {
  // file: null,
  drink: '',
  description: '',
  category: '',
  glass: '',
  alcoholic: 'Alcoholic',
  // ingredients: [],
  // recipePreparation: '',
};

const MainForm = () => {
  // const fileRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (data, action) => {
    const formData = new FormData();
    formData.append('drink', data.drink);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('glass', data.glass);
    formData.append('alcoholic', data.alcoholic);

    try {
      dispatch(addOwnDrinkThunk(formData));
      action.resetForm();
      // fileRef.current.value = null;
      navigate('/my');
    } catch (error) {
    }
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
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, touched, errors }) => (
          <Form>
            <TitleBlock
              categoriesList={categories}
              glassesList={glasses}
              // setValue={setFieldValue}
              errors={errors}
              touched={touched}
              // fileRef={fileRef}
            />
            {/* <IngredientsBlock /> */}
            {/* <RecipePreparationBlock /> */}
            <AddButton type="submit">Add</AddButton>
          </Form>
        )}
      </Formik>
    </DrinkFormWrapper>
  );
};

export default MainForm;
