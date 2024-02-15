import { useState, useRef } from 'react';

// import { SelectArrow } from '../SelectArrow';

const CustomSelectMenu = ({ items, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectRef = useRef();
  const searchRef = useRef();
  const dropdownRef = useRef();

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleClickItem = item => {
    toggleMenu();
    setValue(item);
    setSearchQuery('');
  };

  return (
    <div>
      <button type="button" ref={selectRef} menuOpen={isOpen}>
        <label>{title}</label>
        {items && (
          <div selected={meta.value}>
            <span>{title}</span>
            <SelectArrow isOpen={isOpen} />
          </div>
        )}
      </button>
      {isOpen && items && (
        <>
          <div ref={dropdownRef}>
            {items.length > 20 && (
              <input
                ref={searchRef}
                type="text"
                name={`${title}Filter`}
                placeholder="Search..."
                onChange={() => {}}
              />
            )}
            //TODO SelectItems
          </div>
        </>
      )}
    </div>
  );
};

export default CustomSelectMenu;
