import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  selectCategories,
  selectIngredients,
  selectGlasses,
} from '../../../redux/filters/selectors';

import {
  fetchCategories,
  fetchIngredients,
  fetchGlasses,
} from '../../../redux/filters/operations';

import { AddButton, DrinkFormWrapper, MainFormTitle } from './MainForm.styled';

import TitleBlock from '../TitleBlock';
import { addOwnDrinkThunk } from 'services/fetchOwnDrinks';
import { nanoid } from '@reduxjs/toolkit';
import IngredientsBlock from '../IngredientsBlock/';
import RecipePreparationBlock from '../RecipePreparationBlock/';

const validationSchema = yup.object().shape({
  file: yup.mixed().required('Please add the drink recipe image'),
  drink: yup.string().trim().required('Please enter a drink title'),
  description: yup.string().trim().required('Please enter about  recipe'),
  category: yup.string().required('Please select a category'),
  glass: yup.string().required('Please select a glass'),
  // ingredients: yup
  //   .object()
  //   .shape({
  //     title: yup.string().required('Please select a title'),
  //     measure: yup.string().required('Please enter a measure'),
  //   })
  //   .required()
  //   .min(1, 'Select more than 1 item'),
  instructions: yup.string().trim().required('Please enter about a recipe'),
});

const initialValues = {
  file: null,
  drink: '',
  description: '',
  category: '',
  glass: '',
  alcoholic: 'Non-alcoholic',
  ingredients: [],
  instructions: '',
};

const MainForm = () => {
  const fileRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (data, action) => {
    data.id = nanoid();
    const id = data.id;
    const image = `${id}_${data.file.name}`;

    const newIngredients = JSON.stringify(data.ingredients);

    console.log('ing:', data.ingredients);
    console.log('newing:', newIngredients);
    const formData = new FormData();
    formData.append('file', image);
    formData.append('drink', data.drink);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('glass', data.glass);
    formData.append('alcoholic', data.alcoholic);
    formData.append('instructions', data.instructions);
    formData.append('ingredients', newIngredients);

    try {
      dispatch(addOwnDrinkThunk(formData))
        .then(() => toast.success('New drink added successfully!'))
        .catch(({ message }) => toast.error(`${message}!`));
      action.resetForm();
      fileRef.current.value = null;
      navigate('/my');
    } catch (error) {
      console.error(error);
    }
  };

  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);
  const glasses = useSelector(selectGlasses);

  useEffect(() => {
    if (!categories.length) dispatch(fetchCategories());
    if (!ingredients.length) dispatch(fetchIngredients());
    if (!glasses.length) dispatch(fetchGlasses());
  }, [categories.length, ingredients.length, glasses.length, dispatch]);

  const ingredientsNames = ingredients.map(ingredient => ingredient.title);
  const categoriesNames = categories.map(category => category.name);
  const glassesNames = glasses.map(glass => glass.name);

  return (
    <DrinkFormWrapper>
      <MainFormTitle>Add drink</MainFormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, touched, errors }) => (
          <Form>
            <TitleBlock
              categoriesList={categoriesNames}
              glassesList={glassesNames}
              setValue={setFieldValue}
              errors={errors}
              touched={touched}
              fileRef={fileRef}
            />
            <IngredientsBlock
              items={ingredientsNames}
              title={'Ingredients'}
            />
            <RecipePreparationBlock
              error={errors.instructions}
              touched={touched.instructions}
            />
            <AddButton type="submit">Add</AddButton>
          </Form>
        )}
      </Formik>
    </DrinkFormWrapper>
  );
};

export default MainForm;
