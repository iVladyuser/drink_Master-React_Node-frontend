import { FieldArray, ErrorMessage, useField } from 'formik';
import IngredientsSelect from './IngredientsSelect/IngredientsSelect';
import {
  AddIngredientWrapper,
  RemoveIngredientBtn,
  IngredientsInput,
  MinusBtn,
  PlusBtn,
  IngredientsTitleWrapper,
  PlusMinusBar,
  NumberIngredients,
  ErrorText
} from './IngredientsBlock.styled';
import { RxCross2 } from 'react-icons/rx';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';

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
        <div>
          <IngredientsTitleWrapper>
            <h3>Ingredients</h3>
            <PlusMinusBar>
              <MinusBtn type="button" onClick={() => remove()}>
                <FaMinus size={16} color="rgba(243, 243, 243, 0.3)" />
              </MinusBtn>
              <NumberIngredients>{ingredients.length ? ingredients.length : '0'}</NumberIngredients>
              <PlusBtn type="button" onClick={() => push(initialValue)}>
                <FaPlus size={16} color="rgba(243, 243, 243, 1)" />
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

                      <IngredientsInput
                        name={`ingredients.${index}.measure`}
                        placeholder={'1 cl'}
                      />
                      <ErrorMessage name={`ingredients.${index}.measure`}>
                        {msg => <div>{msg}</div>}
                      </ErrorMessage>

                    <RemoveIngredientBtn type="button" onClick={() => remove(index)}>
                      <RxCross2 size="20px" color="rgba(243, 243, 243, 0.5)" />
                    </RemoveIngredientBtn>
                  </AddIngredientWrapper>
                );
              })}
          </div>
          {touched && typeof error === 'string' ? (
            <ErrorText>{error}</ErrorText>
          ) : null}
        </div>
      )}
    />
  );
};

export default IngredientsBlock;