import { useState } from 'react';
import { useRef, useEffect } from 'react';

import { SelectOptions } from './SelectOptions/SelectOptions';
import { SelectOptionControl } from './SelectButton/SelectButton';

import { SelectContainer } from './SelectList.styled';

export const SelectList = ({ items, placeholder, height, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);
  const selectContainerRef = useRef(null);

  const handleControlClick = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleSelect = e => {
    if (e.target.tagName === 'BUTTON') {
      setSelectedOption(e.target.textContent);
      onSelect(e.target.textContent);
      handleControlClick();
    }
  };

  useEffect(() => {
    const handleOutsideClick = e => {
      if (
        selectContainerRef.current &&
        !selectContainerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <SelectContainer ref={selectContainerRef}>
      <SelectOptionControl
        handleControlClick={handleControlClick}
        selectedOption={selectedOption}
        isOpen={isOpen}
      />
      {isOpen && (
        <SelectOptions
          handleSelect={handleSelect}
          height={height}
          items={items}
        />
      )}
    </SelectContainer>
  );
};
