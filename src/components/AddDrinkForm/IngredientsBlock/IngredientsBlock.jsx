import { FieldArray, ErrorMessage, useField } from 'formik';
import IngredientsSelect from './IngredientsSelect/IngredientsSelect';
import {
  IngridientsWrapper,
  AddIngredientWrapper,
  RemoveIngredientBtn,
  IngredientsInput,
  MinusBtn,
  MinusIcon,
  PlusBtn,
  PlusIcon,
  IngredientsTitleWrapper,
  PlusMinusBar,
  IngredientsInputWrapper,
  NumberIngredients,
  ErrorText,
  CrossIcon,
} from './IngredientsBlock.styled';
import { toast } from 'react-toastify';

const IngredientsBlock = ({ items, title }) => {
  const initialValue = { title: '', measure: '' };

  const [, { touched, error }] = useField('ingredients');

  return (
    <FieldArray
      name="ingredients"
      render={({
        form: {
          values: { ingredients },
        },
        push,
        remove,
      }) => (
        <IngridientsWrapper>
          <IngredientsTitleWrapper>
            <h3>Ingredients</h3>
            <PlusMinusBar>
              <MinusBtn
                type="button"
                onClick={() => {
                  remove();
                  toast('Removed ingredient!');
                }}
              >
                <MinusIcon />
              </MinusBtn>
              <NumberIngredients>
                {ingredients.length ? ingredients.length : '0'}
              </NumberIngredients>
              <PlusBtn
                type="button"
                onClick={() => {
                  push(initialValue);
                  toast('Added ingredient!');
                }}
              >
                <PlusIcon />
              </PlusBtn>
            </PlusMinusBar>
          </IngredientsTitleWrapper>
          <div>
            {ingredients.length > 0 &&
              ingredients.map((ingredient, index) => {
                return (
                  <AddIngredientWrapper
                    key={index}
                    role="listbox"
                    aria-labelledby="ingridientsSelect-group"
                  >
                    <IngredientsSelect
                      items={items}
                      title={title}
                      ingredient={ingredient}
                      index={index}
                    />
                    <IngredientsInputWrapper>
                      <IngredientsInput
                        name={`ingredients.${index}.measure`}
                        placeholder={'1 cl'}
                      />
                      <ErrorMessage name={`ingredients.${index}.measure`}>
                        {msg => <div>{msg}</div>}
                      </ErrorMessage>
                    </IngredientsInputWrapper>

                    <RemoveIngredientBtn
                      type="button"
                      onClick={() => {
                        remove(index);
                        toast('Removed ingredient!');
                      }}
                    >
                      <CrossIcon />
                    </RemoveIngredientBtn>
                  </AddIngredientWrapper>
                );
              })}
          </div>
          {touched && typeof error === 'string' ? (
            <ErrorText>{error}</ErrorText>
          ) : null}
        </IngridientsWrapper>
      )}
    />
  );
};

export default IngredientsBlock;
