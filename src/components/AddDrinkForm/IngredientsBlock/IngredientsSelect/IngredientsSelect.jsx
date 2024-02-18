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
