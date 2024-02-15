import { ArrowWrapper } from './SelectArrow.styled';

export const SelectArrow = ({ isOpen }) => {
  return (
    <ArrowWrapper open={isOpen}>
      <use href="" />
    </ArrowWrapper>
  );
};
