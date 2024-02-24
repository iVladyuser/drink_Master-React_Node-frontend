import React from 'react';
import { ErrorMessage, FieldArray } from 'formik';
import {
  AddIngredientWrapper,
  RemoveIngredientBtn, 
  IngredientsInput,
  MinusBtn,
  PlusBtn,
  IngredientsTitleWrapper,
  PlusMinusBar,
  NumberIngredients
} from './IngredientsBlock.styled';
import { RxCross2 } from 'react-icons/rx'; 
import IngredientsSelect from './IngredientsSelect/IngredientsSelect';
import { FaPlus, FaMinus } from 'react-icons/fa'; 
import { useFetchIngredients } from '../../../hooks/useFetchIngredients';

const AddIngredients = () => {
  const initialValues = { title: '', measure: '' };
  const ingredients = useFetchIngredients();

  return (
    <FieldArray
      name="ingredients"
      render={({ remove, push, form }) => (
        <div>
          <IngredientsTitleWrapper>
            <h3>Ingredients</h3>
            <PlusMinusBar>
              <MinusBtn
                type="button"
                onClick={() => {
                  if (form.values.ingredients.length > 0) remove(form.values.ingredients.length - 1);
                }}
              >
                <FaMinus size={16} color="rgba(243, 243, 243, 0.3)" />
              </MinusBtn>
              <NumberIngredients>
                {form.values.ingredients.length}
              </NumberIngredients>
              <PlusBtn
                type="button"
                onClick={() => push(initialValues)}
              >
                <FaPlus size={16} color="rgba(243, 243, 243, 1)" />
              </PlusBtn>
            </PlusMinusBar>
          </IngredientsTitleWrapper>
          {form.values.ingredients.map((ingredient, index) => {
            return (
            <AddIngredientWrapper key={index}>
              <IngredientsSelect
                value={ingredient.title}
                onChange={selected => {
                  const newIngredients = [...form.values.ingredients];
                  newIngredients[index].title = selected;
                  form.setFieldValue(`ingredients.${index}.title`, selected);
                }}
                options={ingredients}
              />
              <ErrorMessage
                name={`ingredients.${index}.title`}
                component="div"
                className="field-error"
              />
              <IngredientsInput
                name={`ingredients.${index}.measure`}
                placeholder="1 cl"
                type="text"
              />
              <RemoveIngredientBtn // Corrected component name
                type="button"
                onClick={() => remove(index)}
              >
                <RxCross2 size="20px" color="rgba(243, 243, 243, 0.5)" />
              </RemoveIngredientBtn>
            </AddIngredientWrapper>
            )
          }
          )}
        </div>
      )}
    />
  );
};

export default AddIngredients;


// import { FieldArray, ErrorMessage, useField } from 'formik';
// import {
//   AddIngredientWrapper,
//   RemoveInredientBtn,
//   IngredientsInput,
//   MinusBtn,
//   PlusBtn,
//   IngredientsTitleWrapper,
//   PlusMinusBar,
//   NumberIngredients,
// } from './IngredientsBlock.styled';
// import { RxCross2 } from 'react-icons/rx';
// import IngredientsSelect from './IngredientsSelect/IngredientsSelect';
// import { FaPlus } from 'react-icons/fa6';
// import { FaMinus } from 'react-icons/fa6';

// const AddIngredients = ({ items, title }) => {
//   const initialValues = { title: '', measure: '' };

//   const [, { touched, error }] = useField('ingredients');

//   return (
//     <div>
//       <FieldArray
//         name="ingredients"
//         render={({
//           form: {
//             values: { ingredients },
//           },
//           push,
//           remove,
//         }) => (
//           <div>
//             <IngredientsTitleWrapper>
//               <h3>Ingredients</h3>
//               <PlusMinusBar>
//                 <MinusBtn type="button" onClick={() => remove()}>
//                   <FaMinus size={16} color="rgba(243, 243, 243, 0.3)" />
//                 </MinusBtn>
//                 <NumberIngredients>
//                   {ingredients.length ? ingredients.length : '0'}
//                 </NumberIngredients>
//                 <PlusBtn type="button" onClick={() => push(initialValues)}>
//                   <FaPlus size={16} color="rgba(243, 243, 243, 1)" />
//                 </PlusBtn>
//               </PlusMinusBar>
//             </IngredientsTitleWrapper>
//             {ingredients.length > 0 &&
//               ingredients.map((ingredient, index) => {
//                 return (
//                   <AddIngredientWrapper key={index}>
//                     <IngredientsSelect
//                       items={items}
//                       title={title}
//                       ingredient={ingredient}
//                       index={index}
//                     />
//                     <ErrorMessage
//                       name={`ingredients.${index}.title`}
//                       component="div"
//                       className="field-error"
//                     />
//                     <IngredientsInput
//                       name={`ingredients.${index}.measure`}
//                       placeholder="1 cl"
//                       type="text"
//                     />
//                     <ErrorMessage name={`ingredients.${index}.measure`} />
//                     <RemoveInredientBtn
//                       type="button"
//                       onClick={() => remove(index)}
//                     >
//                       <RxCross2 size="20px" color="rgba(243, 243, 243, 0.5)" />
//                     </RemoveInredientBtn>
//                   </AddIngredientWrapper>
//                 );
//               })}
//             {touched && typeof error === 'string' ? <div>{error}</div> : null}
//           </div>
//         )}
//       />
//     </div>
//   );
// };

// export default AddIngredients;
