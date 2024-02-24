import { useSelector } from 'react-redux';
import {
  Input,
  Item,
  Option,
  OptionsContainer,
  Text,
} from './SelectOptions.styled';
import { selectIsLoadingFilters } from '../../../../redux/filters/selectors';
import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

export const SelectOptions = ({ handleSelect, height, items }) => {
  const isLoading = useSelector(selectIsLoadingFilters);
  const [inputValue, setInputValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const handleInputChange = throttle(e => {
    const newValue = e.target.value;
    setInputValue(newValue);
    const filtered = items.filter(item =>
      item.toLowerCase().includes(newValue.toLowerCase())
    );
    setFilteredItems(filtered);
  }, 500);

  return (
    <OptionsContainer onClick={handleSelect} height={height}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Item>
            <Input
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search..."
            />
          </Item>
          {filteredItems.map(item => (
            <li key={item}>
              <Option>{item}</Option>
            </li>
          ))}
        </>
      )}
    </OptionsContainer>
  );
};
