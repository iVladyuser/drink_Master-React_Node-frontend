// import { Formik, ErrorMessage, FieldArray } from 'formik';
// import { AddIngredientWrapper, RemoveInredientBtn, IngredientsInputWrapper, IngredientsInput } from './IngredientsBlock.styled';
// import { RxCross2 } from "react-icons/rx";
// import IngredientsSelect from './IngredientsSelect/IngredientsSelect';
// import { useState } from "react";

// const initialValues = {
//   ingredients: [
//     {
//       title: '',
//       measure: '',
//     },
//   ],
// };

// const ingredients = [
//   "Lemon",
//   "Passoa",
//   "Prosecco",
//   "Cherry",
//   "Orange",
//   "Caramel",
//   "Apple juice",
//   "Vine",
//   "Water",
// ]

// const AddIngredients = () => {
//   const [value, setValue] = useState("");

//   return (
//     <div>
//       <h2>Ingredients</h2>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={async (values) => {
//           await new Promise((r) => setTimeout(r, 500));
//           alert(JSON.stringify(values, null, 2));
//         }}
//       >
//         {({ values }) => (
//           <FieldArray name="ingredients" render={({ insert, remove, push }) => (
//             <div>
//               {values.ingredients.map((ingredient, index) => (
//                 <AddIngredientWrapper className="row" key={index}>
//                   <IngredientsSelect
//                     value={ingredient.name}
//                     onChange={(selected) => {
//                       setValue(selected);
//                       values.ingredients[index].name = selected;
//                     }}
//                     options={ingredients}
//                   />
//                   <ErrorMessage
//                     name={`ingredients.${index}.name`}
//                     component="div"
//                     className="field-error"
//                   />
//                   <IngredientsInputWrapper>
//                     <IngredientsInput
//                       name={`ingredients.${index}.measure`}
//                       placeholder="1 cl"
//                       type="text"
//                     />
//                   </IngredientsInputWrapper>
//                   <RemoveInredientBtn
//                     type="button"
//                     onClick={() => remove(index)}
//                   >
//                     <RxCross2 size="20px" color="rgba(243, 243, 243, 0.5)"/>
//                   </RemoveInredientBtn>
//                 </AddIngredientWrapper>
//               ))}
//               <button
//                 type="button"
//                 onClick={() => push({  title: '',  measure: '' })}
//               >
//                 Add ingredient
//               </button>
//             </div>
//           )} />
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default AddIngredients;