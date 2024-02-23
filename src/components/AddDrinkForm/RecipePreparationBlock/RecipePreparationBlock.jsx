import { useField } from 'formik';
import {
  RecipeTextarea,
  RecipePreparationWrapper,
  ErrorText,
} from './RecipePreparationBlock.styled';

const RecipePreparation = ({ error, touched }) => {
  const [field] = useField('instructions');

  return (
    <RecipePreparationWrapper>
      <h2>Recipe preparation</h2>
      <label text="recipe preparation">
        <RecipeTextarea
          placeholder="Enter the recipe"
          {...field}
        ></RecipeTextarea>
      </label>
      {touched && error ? <ErrorText>{error}</ErrorText> : null}
    </RecipePreparationWrapper>
  );
};

export default RecipePreparation;
