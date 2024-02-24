import { FieldArray, ErrorMessage, useField, Field } from 'formik';
import IngredientsSelect from './IngredientsSelect/IngredientsSelect';
import {NumberIngredients} from './IngredientsBlock.styled'

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
          <div>
            <h3>Ingredients</h3>
            <div>
              <button type="button" onClick={() => remove()}>
                <minus-icon size={16} />
              </button>
              <NumberIngredients>{ingredients.length ? ingredients.length : '0'}</NumberIngredients>
              <button type="button" onClick={() => push(initialValue)}>
                <plus-icon size={16} />
              </button>
            </div>
          </div>
          <div>
            {ingredients.length > 0 &&
              ingredients.map((ingredient, index) => {
                return (
                  <div
                    key={index}
                    role="listbox"
                    aria-labelledby="ingridientsSelect-group"
                  >
                    <IngredientsSelect
                      items={items}
                      title={'Ingredients'}
                      ingredient={ingredient}
                      index={index}
                    />

                    <div>
                      <Field
                        name={`ingredients.${index}.measure`}
                        placeholder={'1 cl'}
                      />
                      <ErrorMessage name={`ingredients.${index}.measure`}>
                        {msg => <div>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <button type="button" onClick={() => remove(index)}>
                      <close-icon size={18} />
                    </button>
                  </div>
                );
              })}
          </div>
          {touched && typeof error === 'string' ? (
            <div>{error}</div>
          ) : null}
        </div>
      )}
    />
  );
};

export default IngredientsBlock;