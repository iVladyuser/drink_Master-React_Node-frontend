import { Formik, Field, ErrorMessage, FieldArray } from 'formik';
import { AddIngredientWrapper, RemoveInredientBtn } from './IngredientsBlock.styled';
import { RxCross2 } from "react-icons/rx";
import IngredientsSelect from './IngredientsSelect/IngredientsSelect';
import {useState} from "react";

const initialValues = {
  ingredients: [
    {
      name: '',
      quantity: '',
    },
  ],
};

const ingredients = [
    "Lemon",
    "Passoa",
    "Prosecco",
    "Cherry",
    "Orange",
    "Caramel",
    "Apple juice",
    "Vine",
    "Water",
]

const AddIngredients = () => {
    const [value, setValue] = useState("");
  return (
  <div>
    <h2>Ingredients</h2>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
          <FieldArray name="ingredients">
            {({ insert, remove, push }) => (
              <div>
                {values.ingredients.length > 0 &&
                  values.ingredients.map((friend, index) => (
                    <AddIngredientWrapper className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`ingredients.${index}.name`}></label>
                        <IngredientsSelect
                        value={value}
                        onChange={e => setValue(e)}
                        options={ingredients}
                        />
                        <ErrorMessage
                          name={`ingredients.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`ingredients.${index}.quantity`}></label>
                        <Field
                          name={`ingredients.${index}.quantity`}
                          placeholder="1 cl"
                          type="text"
                        />
                        <ErrorMessage
                          name={`ingredients.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                    <RemoveInredientBtn
                        type="button"
                        onClick={() => remove(index)}
                    >
                        <RxCross2 />
                    </RemoveInredientBtn>
                    </AddIngredientWrapper>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ name: '', quantity: '' })}
                >
                  Add ingredient
                </button>
              </div>
            )}
          </FieldArray>
      )}
    </Formik>
  </div>
  );
};

export default AddIngredients;