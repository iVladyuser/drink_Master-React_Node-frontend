import {
  ArrowStyled,
  PlaceholderWrap,
  IngredientsSelectWrapper,
  IngredientsSearchWrapper,
  IngredientsSelectInput
} from './IngredientsSelect.styled';
import { useState, useMemo, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const IngredientsSelect = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const [id] = useState(uuidv4());

  useEffect(() => {
    function handleOutsideClick(e){
        if (
            !e.target.closest(`Toggle-${id}`) && 
            !e.target.closest(`#Select-${id}`)
        )
        setOpen(false);
    }
    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const opt = useMemo(() => {
    const OPTIONS = options.filter(
      o =>
        o.toString().toLowerCase().indexOf(search.toString().toLowerCase()) !==
        -1
    );
    return OPTIONS.length > 0
      ? OPTIONS.map((o, i) => (
          <div
            key={i}
            onClick={() => {
              onChange(o.toString());
              setOpen(false);
            }}
          >
            {o}
          </div>
        ))
      : [
          <div
            key={'not-found'}
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
          >
            No matches found
          </div>,
        ];
  }, [options, search]);

  useMemo(() => setSearch(value), [value]);

  return (
    <IngredientsSelectWrapper id={`Select-${id}`}>
      <IngredientsSearchWrapper>
        <IngredientsSelectInput
          placeholder="Lem"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onFocus={() => setOpen(true)}
        ></IngredientsSelectInput>
        <span onClick={() => setOpen(p => !p)} id={`Toggle-${id}`}>
          <ArrowStyled open={open} />
        </span>
      </IngredientsSearchWrapper>
      <PlaceholderWrap id="options" open={open}>
        {opt}
      </PlaceholderWrap>
    </IngredientsSelectWrapper>
  );
};

IngredientsSelect.defaultProps = {
  options: [],
  value: '',
  onChange: () => {},
};

export default IngredientsSelect;

// import { useField } from 'formik';
// import { useEffect, useRef, useState } from 'react';

// import {
//   CustomSelect,
//   DropMenu,
//   Label,
//   PlaceholderWrap,
//   SearchInput,
//   SelectItem,
//   SelectWrapper,
// } from './IngredientsSelect.styled';
// import { ErrorText } from '../../TitleBlock/TitleBlock.styled';

// const CustomSelectMenu = ({ items, title, touched, error }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const selectRef = useRef();
//   const searchRef = useRef();
//   const dropdownRef = useRef();

//   const titleValue = title.toLowerCase();

//   const filteredItems = value =>
//     items.filter(item => item.toLowerCase().includes(value.toLowerCase()));

//   const [, meta, { setValue }] = useField({ name: titleValue });

//   const toggleMenu = () => {
//     setIsOpen(prevState => !prevState);
//   };

//   const handleClickItem = item => {
//     toggleMenu();
//     setValue(item);
//     setSearchQuery('');
//   };

//   useEffect(() => {
//     if (searchRef) {
//       setSearchQuery('');
//       if (isOpen && searchRef.current) {
//         searchRef.current.focus();
//       }
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     const handler = e => {
//       if (selectRef.current && selectRef.current.contains(e.target)) {
//         setIsOpen(true);
//       }
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener('click', handler);
//     return () => {
//       window.removeEventListener('click', handler);
//     };
//   });

//   return (
//     <SelectWrapper>
//       <CustomSelect type="button" ref={selectRef} menuOpen={isOpen}>
//         <Label>{title}</Label>
//         {items && (
//           <PlaceholderWrap selected={meta.value}>
//             <span>{meta.value ? meta.value : ''}</span>
//             <SelectArrow isOpen={isOpen} />
//           </PlaceholderWrap>
//         )}
//       </CustomSelect>
//       {isOpen && items && (
//         <>
//           <DropMenu ref={dropdownRef}>
//             <SearchInput
//                 ref={searchRef}
//                 type="text"
//                 name={`${title}Filter`}
//                 placeholder="Search..."
//                 onChange={e => setSearchQuery(e.target.value)}
//               />
//             {filteredItems(searchQuery).map((item, index) => (
//               <SelectItem key={index} onClick={() => handleClickItem(item)}>
//                 {item}
//               </SelectItem>
//             ))}
//           </DropMenu>
//         </>
//       )}
//       {touched && error ? <ErrorText>{error}</ErrorText> : null}
//     </SelectWrapper>
//   );
// };

// export default CustomSelectMenu;
