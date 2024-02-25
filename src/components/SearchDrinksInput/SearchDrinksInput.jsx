

import {  SearchInput } from './SearchDrinksInput.styled';
 
const SearchDrinksInput = ({ value, onChange }) => {
  
  return (
      <SearchInput
        type="text"
        placeholder="Enter the text"
        autoFocus
       value={value}
       onChange={onChange}
      />
  );
};

export default SearchDrinksInput;