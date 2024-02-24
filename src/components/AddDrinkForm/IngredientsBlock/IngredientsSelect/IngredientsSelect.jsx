import { useEffect, useRef, useState } from 'react';

import {
  SelectWrapper,
  CustomSelect,
  DropMenu,
  PlaceholderWrap,
  SearchInput,
  SelectItem,
  IngredientsSpan
} from './IngredientsSelect.styled';
import { ErrorText } from '../../TitleBlock/TitleBlock.styled';

import { SelectArrow } from '../../CustomSelect/SelectArrow/SelectArrow';
import { useField } from 'formik';

const IngredientsSelect = ({ items, title, ingredient, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectRef = useRef();
  const searchRef = useRef();
  const dropdownRef = useRef();

  const titleValue = title.toLowerCase();

  const [, meta, { setValue }] = useField(`ingredients.${index}.title`);

  const filteredItems = value =>
    items.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleClickItem = item => {
    setValue(item);
    toggleMenu();
    setSearchQuery('');

    ingredient.title = item.title;
    ingredient.ingredientId = item._id;

  };

  useEffect(() => {
    if (searchRef) {
      setSearchQuery('');
      if (isOpen && searchRef.current) {
        searchRef.current.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = e => {
      if (selectRef.current && selectRef.current.contains(e.target)) {
        setIsOpen(true);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  }, []);

  return (
    <SelectWrapper>
      <CustomSelect type="button" ref={selectRef} menuOpen={isOpen}>
        {items && (
          <PlaceholderWrap selected={meta.value}>
            <IngredientsSpan>{meta.value ? meta.value : 'Lem'}</IngredientsSpan>

            <SelectArrow isOpen={isOpen} color='#f3f3f380'/>
          </PlaceholderWrap>
        )}
      </CustomSelect>
      {isOpen && items && (
        <>
          <DropMenu ref={dropdownRef}>
            {items.length > 3 && (
              <SearchInput
                ref={searchRef}
                type="text"
                name={`${titleValue}Filter`}
                placeholder="Search..."
                onChange={e => setSearchQuery(e.target.value)}
              />
            )}
            {filteredItems(searchQuery).map((item, index) => (
              <SelectItem key={index} onClick={() => handleClickItem(item)}>
                {item}
              </SelectItem>
            ))}
          </DropMenu>
        </>
      )}
      {meta.error && meta.touched && (
        <ErrorText name={`ingredients.${index}.title`}>
          {msg => <div>{msg}</div>}
        </ErrorText>
      )}
    </SelectWrapper>
  );
};

export default IngredientsSelect;