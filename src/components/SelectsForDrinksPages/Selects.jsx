// import { SelectContainer, Arrow, OpenSelect, Wraper } from './app.styled';

export const Selects = () => {
  // const [isOpenCategory, setIsOpenCategory] = useState(false);
  // const [isOpenIngredients, setIsOpenIngredients] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedIngredient, setSelectedIngredient] = useState('');
  // const [isArrowRotatedCategory, setIsArrowRotatedCategory] = useState(false);
  // const [isArrowRotatedIngredients, setIsArrowRotatedIngredients] = useState(false);
  // console.log("Selected Category:", selectedCategory);
  // console.log("Selected Category:",  selectedIngredient);
  //   const toggleCategory = () => {
  // setIsOpenCategory((prevState) => !prevState);
  // setIsArrowRotatedCategory((prevState) => !prevState);
  //   };
  //   const categoryOptions = [
  //   { value: '', label: 'Category', disabled: true, hidden: true },
  //   { value: 'option1', label: 'Option 1' },
  //   { value: 'option2', label: 'Option 2' },
  //   { value: 'option3', label: 'Option 3' },
  // ];
  // const ingredientOptions = [
  //   { value: '', label: 'Ingredient', disabled: true, hidden: true },
  //   { value: 'ingredient1', label: 'Ingredient 1' },
  //   { value: 'ingredient2', label: 'Ingredient 2' },
  //   { value: 'ingredient3', label: 'Ingredient 3' },
  // ];
  //   const toggleIngredients = () => {
  // setIsOpenIngredients((prevState) => !prevState);
  // setIsArrowRotatedIngredients((prevState) => !prevState);
  //   };
  //   const handleCategoryChange = (event) => {
  //     const value = event.target.value;
  // console.log("Selected Category:", value);
  // setSelectedCategory(value);
  //   };
  //   const handleIngredientChange = (event) => {
  //     const value = event.target.value;
  //console.log("Selected Ingredient:", value);
  // setSelectedIngredient(value);
  //   };
  //   return (
  //     <Wraper>
  //       <div>
  //         <SelectContainer className={isOpenCategory ? 'open' : ''}>
  //           <Arrow
  //             onClick={toggleCategory}
  // isRotated={isArrowRotatedCategory}
  //           >
  //             ^
  //           </Arrow>
  //           <OpenSelect
  //             id="category"
  //             name="category"
  //             value={selectedCategory}
  //             onChange={handleCategoryChange}
  //             onClick={toggleCategory}
  //           >
  //            {categoryOptions.map((option) => (
  //     <option key={option.value} value={option.value} disabled={option.disabled} hidden={option.hidden}>
  //       {option.label}
  //     </option>
  //   ))}
  //           </OpenSelect>
  //         </SelectContainer>
  //       </div>
  //       <div>
  //         <SelectContainer className={isOpenIngredients ? 'open' : ''}>
  //           <Arrow
  //             onClick={toggleIngredients}
  //             isRotated={isArrowRotatedIngredients}
  //           >
  //            ^
  //           </Arrow>
  //           <OpenSelect
  //             id="ingredients"
  //             name="ingredients"
  //             value={selectedIngredient}
  //             onChange={handleIngredientChange}
  //             onClick={toggleIngredients}
  //           >
  //            {ingredientOptions.map((option) => (
  //     <option key={option.value} value={option.value} disabled={option.disabled} hidden={option.hidden}>
  //       {option.label}
  //     </option>
  //   ))}
  //           </OpenSelect>
  //         </SelectContainer>
  //       </div>
  //     </Wraper>
  //   );
};

export default Selects;
