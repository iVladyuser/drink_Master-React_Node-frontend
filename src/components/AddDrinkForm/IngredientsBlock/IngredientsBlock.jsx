import { Formik, ErrorMessage, FieldArray } from 'formik';
import {
  AddIngredientWrapper,
  RemoveInredientBtn,
  IngredientsInput,
  MinusBtn,
  PlusBtn,
  IngredientsTitleWrapper,
  PlusMinusBar,
  NumberIngredients
} from './IngredientsBlock.styled';
import { RxCross2 } from 'react-icons/rx';
import IngredientsSelect from './IngredientsSelect/IngredientsSelect';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';

const initialValues = {
  ingredients: [
    {
      title: '',
      measure: '',
    },
  ],
};

const ingredients = [
  'Lemon',
  'Passoa',
  'Prosecco',
  'Cherry',
  'Orange',
  'Caramel',
  'Apple juice',
  'Vine',
  'Water',
];

const AddIngredients = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <FieldArray
            name="ingredients"
            render={({ remove, push }) => (
              <div>
                <IngredientsTitleWrapper>
                  <h3>Ingredients</h3>
                  <PlusMinusBar>
                  <MinusBtn type="button" onClick={() => remove()}>
                    <FaMinus size={16} color="rgba(243, 243, 243, 0.3)" />
                  </MinusBtn>
                  <NumberIngredients>{values.ingredients.length ? values.ingredients.length : '0'}</NumberIngredients>
                  <PlusBtn type="button" onClick={() => push(initialValues)}>
                    <FaPlus size={16} color="rgba(243, 243, 243, 1)" />
                  </PlusBtn>
                  </PlusMinusBar>
                </IngredientsTitleWrapper>
                {values.ingredients.map((ingredient, index) => (
                  <AddIngredientWrapper className="row" key={index}>
                    <IngredientsSelect
                      value={ingredient.name}
                      onChange={selected => {
                        setValue(selected);
                        values.ingredients[index].name = selected;
                      }}
                      options={ingredients}
                    />
                    <ErrorMessage
                      name={`ingredients.${index}.name`}
                      component="div"
                      className="field-error"
                    />
                    <IngredientsInput
                      name={`ingredients.${index}.measure`}
                      placeholder="1 cl"
                      type="text"
                    />
                    <RemoveInredientBtn
                      type="button"
                      onClick={() => remove(index)}
                    >
                      <RxCross2 size="20px" color="rgba(243, 243, 243, 0.5)" />
                    </RemoveInredientBtn>
                  </AddIngredientWrapper>
                ))}
              </div>
            )}
          />
        )}
      </Formik>
    </div>
  );
};

export default AddIngredients;

// const IngredientsBlock = ({ items, title }) => {
//   const initialValue = { title: '', measure: '' };

//   const [, { touched, error }] = useField('ingredients');

//   return (
//     <FieldArray
//       name="ingredients"
//       render={({
//         form: {
//           values: { ingredients },
//         },
//         push,
//         remove,
//       }) => (
//         <div>
//           <div>
//             <h3>Ingredients</h3>
//             <div>
//               <MinusBtn type="button" onClick={() => remove()}>
//                 <FaMinus size={16} color='rgba(243, 243, 243, 0.3)'/>
//               </MinusBtn>
//               <span>{ingredients.length ? ingredients.length : '0'}</span>
//               <PlusBtn type="button" onClick={() => push(initialValue)}>
//                 <FaPlus size={16} color='rgba(243, 243, 243, 1)'/>
//               </PlusBtn>
//             </div>
//           </div>
//           <div>
//             {ingredients.length > 0 &&
//               ingredients.map((ingredient, index) => (
//                 <AddIngredientWrapper
//                   key={index}
//                   role="ingredientsSelect"
//                   aria-labelledby="ingridientsSelect-group"
//                 >
//                   <IngredientsSelect
//                     items={items}
//                     title={title}
//                     ingredient={ingredient}
//                     index={index}
//                   />

//                   <div>
//                     <IngredientsInput
//                       name={`ingredients.${index}.measure`}
//                       placeholder="1 cl"
//                     />
//                     <ErrorMessage name={`ingredients.${index}.measure`} />
//                   </div>

//                   <RemoveInredientBtn
//                     type="button"
//                     onClick={() => remove(index)}
//                   >
//                     <RxCross2 size={18} color="white" />
//                   </RemoveInredientBtn>
//                 </AddIngredientWrapper>
//               ))}
//             ;
//           </div>
//           {touched && typeof error === 'string' ? <div>{error}</div> : null}
//         </div>
//       )}
//     />
//   );
// };

// export default IngredientsBlock;

// const IngredientsBlock = ({ items, title }) => {
//   const initialValue = { title: '', measure: '' };

//   const [, { touched, error }] = useField('ingredients');

//   return (
//     <FieldArray
//       name="ingredients"
//       render={({ form, push, remove }) => (
//         <div>
//           <div>
//             <h3>Ingredients</h3>
//             <div>
//               <button type="button" onClick={() => remove()}>
//                 <minus-icon size={16} />
//               </button>
//               <span>{form.values.ingredients.length || '0'}</span>
//               <button type="button" onClick={() => push(initialValue)}>
//                 <plus-icon size={16} />
//               </button>
//             </div>
//           </div>
//           <div>
//             {form.values.ingredients.map((ingredient, index) => (
//               <div key={index} role="ingredientsSelect" aria-labelledby="ingredientsSelect-group">
//                 <div>
//                 <IngredientsSelect
//                   items={items}
//                   title={title}
//                   ingredient={ingredient}
//                   index={index}
//                 />
//                 </div>
//                 <div>
//                   <IngredientsInput
//                     name={`ingredients.${index}.measure`}
//                     placeholder="1 cl"
//                   />
//                   <ErrorMessage name={`ingredients.${index}.measure`} />
//                 </div>

//               </div>
//             ))}
//           </div>
//           {touched && error ? <div>{error}</div> : null}
//         </div>
//       )}
//     />
//   );
// };

// export default IngredientsBlock;
