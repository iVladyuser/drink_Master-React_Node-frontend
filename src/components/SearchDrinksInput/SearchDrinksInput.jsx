import { useState } from 'react';

import {  SearchInput } from './SearchDrinksInput.styled';

const SearchDrinksInput = () => {
  const [name_drinks, setName_drinks] = useState('');

  console.log("name_drinks:" + name_drinks);

function showInput(event){
setName_drinks(event.target.value);
}
  
  return (
      <SearchInput
        type="text"
        placeholder="Enter the text"
        autoFocus
        onInput= {showInput}
      />
  );
};

export default SearchDrinksInput;