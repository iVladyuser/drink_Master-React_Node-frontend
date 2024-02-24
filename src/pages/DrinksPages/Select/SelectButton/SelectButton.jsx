import { SelectArrow } from './SelectArrow/SelectArrow';
import { OptionControl, OptionControlValue } from './SelectButton.styled';

export const SelectOptionControl = ({
  handleControlClick,
  selectedOption,
  isOpen,
}) => {
  return (
    <OptionControl onClick={handleControlClick}>
      <OptionControlValue>{selectedOption}</OptionControlValue>
      <SelectArrow isOpen={isOpen} />
    </OptionControl>
  );
};
