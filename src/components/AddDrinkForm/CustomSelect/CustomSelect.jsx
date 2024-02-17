import { useField } from 'formik';
import { useEffect, useRef, useState } from 'react';

import {
  CustomSelect,
  DropMenu,
  Label,
  PlaceholderWrap,
  SearchInput,
  SelectItem,
  SelectWrapper,
} from './CustomSelect.styled';
import { ErrorText } from '../TitleBlock/TitleBlock.styled';

import { SelectArrow } from './SelectArrow/SelectArrow';

const CustomSelectMenu = ({ items, title, touched, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectRef = useRef();
  const searchRef = useRef();
  const dropdownRef = useRef();

  const titleValue = title.toLowerCase();

  const filteredItems = value =>
    items.filter(item => item.toLowerCase().includes(value.toLowerCase()));

  const [, meta, { setValue }] = useField({ name: titleValue });

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleClickItem = item => {
    toggleMenu();
    setValue(item);
    setSearchQuery('');
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
  });

  return (
    <SelectWrapper>
      <CustomSelect type="button" ref={selectRef} menuOpen={isOpen}>
        <Label>{title}</Label>
        {items && (
          <PlaceholderWrap selected={meta.value}>
            <span>{meta.value ? meta.value : ''}</span>
            <SelectArrow isOpen={isOpen} />
          </PlaceholderWrap>
        )}
      </CustomSelect>
      {isOpen && items && (
        <>
          <DropMenu ref={dropdownRef}>
            {items.length > 12 && (
              <SearchInput
                ref={searchRef}
                type="text"
                name={`${title}Filter`}
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
      {touched && error ? <ErrorText>{error}</ErrorText> : null}
    </SelectWrapper>
  );
};

export default CustomSelectMenu;
