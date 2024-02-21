
import { useDispatch, useSelector } from 'react-redux';
import {  SearchInput } from './SearchDrinksInput.styled';
 import { selectDrinksFilter } from '../../redux/drink/selectorsForDrinksPages';
 import {setDrinksFilter} from '../../redux/drink/sliceFilterForDrinksPages'
const SearchDrinksInput = () => {
  const drinksQueryFilter = useSelector(selectDrinksFilter);
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    const userQuery = e.target.value;
   
    
    
    const normalizedValue = userQuery.toLowerCase().trim();
    dispatch(setDrinksFilter(normalizedValue));
  };

  return (
      <SearchInput
        type="text"
        placeholder="Enter the text"
        autoFocus
       value={drinksQueryFilter}
      
       onChange= {handleFilterChange}
      />
  );
};

export default SearchDrinksInput;